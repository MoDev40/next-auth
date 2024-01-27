import { auth } from "@/app/auth";
import Profile from "../_component/Profile"
export default async function ProfilePage() {
  const session = await auth()
  console.log(session)
  return (
    <Profile user={session?.user}/>
  );
}