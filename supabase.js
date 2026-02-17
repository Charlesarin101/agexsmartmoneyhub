/* supabase.js (single source of truth) */
(function () {
  const SUPABASE_URL = "https://abingfaxdrtxceriulxt.supabase.co";
  const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFiaW5nZmF4ZHJ0eGNlcml1bHh0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzEyNTkzNTQsImV4cCI6MjA4NjgzNTM1NH0.PydZNseDl05riGoAXwOThe95ZuYdamdJ1vriiN9FIk0";

  // Expose config so pages can use it without repeating keys.
  window.AGEX_SUPABASE = { url: SUPABASE_URL, anon: SUPABASE_ANON_KEY };

  // NOTE:
  // If you already load supabase via CDN in index/lodge, keep that.
  // This file only stores your credentials in one place.
})();

