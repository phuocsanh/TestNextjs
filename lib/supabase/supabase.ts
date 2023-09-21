import { createClient } from "@supabase/supabase-js";

export function createSupabaseClient(
  supabaseUrl: string,
  supabaseKey: string,
  options?: any
) {
  const intialOptions = {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
    global: {
      headers: { "x-ai-header": "microreal" },
    },
    ...options,
  };
  return createClient(supabaseUrl, supabaseKey, intialOptions);
}
