// Supabase Configuration (AGEx Project)

const supabaseUrl = "https://abingfaxdrtxceriulxt.supabase.co";

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5nZmF4ZHJ0eGNlcml1bHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNTkzNTQsImV4cCI6MjA4NjgzNTM1NH0.PydZNseDl05riGoAXwOThe95ZuYdamdJ1vriiN9FIk0";

// Create client
const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseAnonKey
);
