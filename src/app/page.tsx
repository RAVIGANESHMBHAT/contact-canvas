import { UserButton, currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();

  return (
    <div>
      <UserButton />
      <pre className="text-white">{JSON.stringify(user, null, 4)}</pre>
    </div>
  );
}
