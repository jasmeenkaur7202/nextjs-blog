import Image from "next/image"

type User = {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
} | undefined

type Props = {
  user: User,
}

export default function Card({ user }: Props) {
  const greeting = user?.name ? (
    <span className="flex flex-col items-center p-2 bg-white rounded-lg font-bold text-xl text-black">
      Hello {user?.name}!
    </span>
  ) : null

  const emailDisplay = user?.email ? (
    <span className="flex flex-col items-center p-2 bg-white rounded-lg font-bold text-md text-black">
      You are logged in as : {user?.email}
    </span>
  ) : null

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src={user?.image}
      width={200}
      height={200}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null

  return (
    <section className="flex flex-col">
      {userImage}
      {greeting}
      {emailDisplay}
    </section>
  )
}