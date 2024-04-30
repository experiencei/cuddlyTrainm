import {handleAuth} from "@kinde-oss/kinde-auth-nextjs/server";
import { createUser } from "../../../../lib/actions/user.actions";
export const GET = handleAuth();


// Get the ID and type
const { id } = evt.data;
const eventType = evt.type;

if(eventType === 'user.created') {
  const { id, email_addresses,  first_name, last_name, phoneNumber } = evt.data;

  const user = {
    clerkId: id,
    email: email_addresses[0].email_address,
    firstName: first_name,
    lastName: last_name,
    phoneNumber: phoneNumber,
  }

  const newUser = await createUser(user);
}