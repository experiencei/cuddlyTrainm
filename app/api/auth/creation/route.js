import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { supabase } from "../../../../utils/supabase/client"

export async function GET() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  if (!user || user === null || !user.id) {
    throw new Error("Something went wrong, i am srorry....");
  }

  // console.log(user);
  // find user from db

  let { data: User_Information } = await supabase
  .from('User_Information')
  .select('*')
          
console.log(User_Information) 

// create user if it doesn't exit
const { data, error } = await supabase
.from('User_Information')
.insert([
  { some_column: 'someValue' },
  { some_column: 'otherValue' },
])
.select()



          
if(data) {
  console.log("Succesfully" , data);
}
if(error) {
  console.log("Error" , error);
}

  return NextResponse.redirect("http://localhost:3000");
}
