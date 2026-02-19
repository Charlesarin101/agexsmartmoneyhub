// supabase.js
// Global client: window.supabaseClient

const SUPABASE_URL = "https://abingfaxdrtxceriulxt.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5nZmF4ZHJ0eGNlcml1bHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNTkzNTQsImV4cCI6MjA4NjgzNTM1NH0.PydZNseDl05riGoAXwOThe95ZuYdamdJ1vriiN9FIk0";

window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
});
