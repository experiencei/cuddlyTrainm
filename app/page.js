import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

{/* <LoginLink>Sign in</LoginLink>
<RegisterLink>Sign up</RegisterLink> */}

export default function Home() {
  return (
    <h1 className="text-xl font-medium">
      <RegisterLink>Sign up</RegisterLink>
    </h1>
  );
}