// import { cookies } from "next/headers";
// import { createServerClient } from "@supabase/ssr";
// import { Database } from "./database.types";

// // can't set or remove cookies in a server component
// export const serverClient = createServerClient<Database>(
//   "https://ctlctfpgzjczkgvarkgj.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bGN0ZnBnempjemtndmFya2dqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDg4ODczOCwiZXhwIjoyMDMwNDY0NzM4fQ.sfrFoEfK3hpO1HcNbOzZ3QAQ9LcDud4kwbNgPXd9aNs",
//   {
//     cookies: {
//       get: (name) => {
//         return cookies().get(name)?.value;
//       },
//     },
//   }
// );

import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const serverClient = createClient(
  "https://ctlctfpgzjczkgvarkgj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0bGN0ZnBnempjemtndmFya2dqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDg4ODczOCwiZXhwIjoyMDMwNDY0NzM4fQ.sfrFoEfK3hpO1HcNbOzZ3QAQ9LcDud4kwbNgPXd9aNs"
);

export default serverClient;
