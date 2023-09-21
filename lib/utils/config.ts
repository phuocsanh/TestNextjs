export type Environment = "dev" | "prod";
export default class ConfigService {
  static getBackendUrl(): string {
    return process.env.NEXT_PUBLIC_BACKEND_URL!;
  }

  static getSupabaseUrl(): string {
    return process.env.NEXT_PUBLIC_SUPABASE_URL!;
  }

  static getAnonKey(): string {
    return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  }

  static getStorageUrl(): string {
    return process.env.NEXT_PUBLIC_STORAGE_URL!;
  }

  static getEnvironment(): Environment {
    return (process.env.NEXT_PUBLIC_ENV as Environment) ?? "dev";
  }
}
