import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://mqkgqgmnkwlksdhgmyje.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1xa2dxZ21ua3dsa3NkaGdteWplIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDgwNTUwMzgsImV4cCI6MTk2MzYzMTAzOH0.AwzChwdMoLww2KS-FevUNzPKQR03zhXKGP9-KhRn-qI'
)

export { supabase }
