/* ==========================================================================
   EMMANUEL™ — Conexión a Supabase
   La "anon key" es pública por diseño: la seguridad real vive en las
   políticas de Row Level Security definidas en sql/schema.sql, no aquí.
   ========================================================================== */
const SUPABASE_URL = "https://fzvfzqbztjaqxefmbvfw.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6dmZ6cWJ6dGphcXhlZm1idmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyNDUzODgsImV4cCI6MjA5OTgyMTM4OH0.2n0EE1xnPydosA2IDIx8jbIzZpCSoHfAFZ5IBruKxEs";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
