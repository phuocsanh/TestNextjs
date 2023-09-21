import "server-only";
import ConfigService from "../utils/config";
import PrivateConfigService from "../utils/private-config";
import { createSupabaseClient } from "./supabase";

const supabaseClientAdmin = createSupabaseClient(
  ConfigService.getSupabaseUrl(),
  PrivateConfigService.getServiceRoleKey()
);
export { supabaseClientAdmin };
