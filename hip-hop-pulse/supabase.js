import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://aicilwgadairuwpfqvsj.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpY2lsd2dhZGFpcnV3cGZxdnNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI1Njk3OTYsImV4cCI6MjAzODE0NTc5Nn0.gZhf0jhO8uPncjUIFcoR2BiM01RMJGz6qGpgwGLKKag'
export const supabase = createClient(supabaseUrl, supabaseKey)