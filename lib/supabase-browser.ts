import { createBrowserClient } from "@supabase/ssr";
import { Database } from "./database.types";

export const browserClient = createBrowserClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string
);
