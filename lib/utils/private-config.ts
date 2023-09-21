"server-only";

export default class PrivateConfigService {
  // Server only configuration
  static getServiceRoleKey(): string {
    return process.env.SUPABASE_SERVICE_ROLE_KEY!;
  }
  static getPublicApiSecret(): string {
    return process.env.WEB_PUBLIC_API_SECRET!;
  }
}
