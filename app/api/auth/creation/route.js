import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import supabase from "../../../../utils/supabase/client"

export async function GET() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Smoething went wrong, i am srorry....");
  }

  
let { dbUser: User_Information } = await supabase
.from('User_Information')
.select('id')



if (!User_Information) {
const { data, error } = await supabase
.from('User_Information')
.insert([
  { 
  user_email: user.email ?? "",
  id: user.id,
  profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
  firstName: user.given_name ?? "",
  lastName: user.family_name ?? "",

 },
])
.select()
        
}
  return NextResponse.redirect("http://localhost:3000");
}
