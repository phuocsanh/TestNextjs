import "client-only";
import ConfigService from "../utils/config";
import { createSupabaseClient } from "./supabase";

const supabaseClientAnon = createSupabaseClient(
  ConfigService.getSupabaseUrl(),
  ConfigService.getAnonKey()
);
export { supabaseClientAnon };
