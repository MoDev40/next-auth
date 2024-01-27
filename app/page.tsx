import Link from "next/link";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth()
  return (
    <div className="flex flex-row justify-between p-10 w-[1120px] mx-auto">
      <h1>Next-Auth</h1>
      {
        session != null ?
        <Link href="/profile">Profile</Link>
        
        :
        <Link href="/login">Login</Link>
      }
    </div>
  );
}
