import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";
import { Database } from "./database.types";

// can't set or remove cookies in a server component
export const serverClient = createServerClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string,
  {
    cookies: {
      get: (name) => {
        return cookies().get(name)?.value;
      },
    },
  }
);
