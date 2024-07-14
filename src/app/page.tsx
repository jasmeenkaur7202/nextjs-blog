import { getServerSession } from "next-auth";
import LoginPage from "../components/LoginPage";
import { redirect } from "next/navigation";
import { options } from "./api/auth/[...nextauth]/options";
import UserCard from "@/components/UserCard";

export default async function Home() {
  const session = await getServerSession(options)

  if(!session) {
    redirect('/api/auth/signin?callbackUrl=/server')
  }

  return (
    <section>
      <h1 className="text-center font-semibold text-xl">Welcome to Next js Blog: Write. Share. Connect.</h1>
      <UserCard user={session?.user} />
    </section>
  )
}
