-- 1. Restrict invitation creation to admins only
DROP POLICY IF EXISTS "Authenticated can create invitations" ON public.invitations;
CREATE POLICY "Admins can create invitations"
  ON public.invitations
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = invited_by AND public.has_role(auth.uid(), 'admin'));

-- 2. Restrict activity_log SELECT to reporter/assignee/admin of the related bug
DROP POLICY IF EXISTS "Activity viewable by authenticated" ON public.activity_log;
CREATE POLICY "Activity viewable by bug participants or admins"
  ON public.activity_log
  FOR SELECT
  TO authenticated
  USING (
    public.has_role(auth.uid(), 'admin')
    OR EXISTS (
      SELECT 1 FROM public.bugs b
      WHERE b.id = activity_log.bug_id
        AND (b.reporter_id = auth.uid() OR b.assignee_id = auth.uid())
    )
  );

-- 3. Tighten bug-attachments upload: require path "<uid>/<bug_id>/..." and user is reporter/assignee/admin
DROP POLICY IF EXISTS "Authenticated can upload bug attachments" ON storage.objects;
CREATE POLICY "Bug participants can upload attachments"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'bug-attachments'
    AND (storage.foldername(name))[1] = auth.uid()::text
    AND EXISTS (
      SELECT 1 FROM public.bugs b
      WHERE b.id::text = (storage.foldername(name))[2]
        AND (
          b.reporter_id = auth.uid()
          OR b.assignee_id = auth.uid()
          OR public.has_role(auth.uid(), 'admin')
        )
    )
  );

-- Also restrict who can read bug attachments to bug participants/admins
DROP POLICY IF EXISTS "Authenticated can view bug attachments" ON storage.objects;
CREATE POLICY "Bug participants can view attachments"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'bug-attachments'
    AND EXISTS (
      SELECT 1 FROM public.bugs b
      WHERE b.id::text = (storage.foldername(name))[2]
        AND (
          b.reporter_id = auth.uid()
          OR b.assignee_id = auth.uid()
          OR public.has_role(auth.uid(), 'admin')
        )
    )
  );

-- 4. Avatars public bucket: prevent broad listing via API.
-- Files remain accessible by direct public CDN URL (bucket is public),
-- but we drop the permissive SELECT policy that lets clients enumerate them.
DROP POLICY IF EXISTS "Anyone can view avatars" ON storage.objects;

-- 5. SECURITY DEFINER functions: revoke EXECUTE from anon/public.
-- Trigger functions don't need direct EXECUTE for any role.
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.generate_tracking_id() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.update_updated_at_column() FROM PUBLIC, anon, authenticated;
-- has_role and get_team_members: revoke from anon, keep for authenticated
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO authenticated;
REVOKE EXECUTE ON FUNCTION public.get_team_members() FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.get_team_members() TO authenticated;