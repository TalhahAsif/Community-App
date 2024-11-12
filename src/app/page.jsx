import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Home() {
  const session = await auth();

  console.log("session===>",session);
  

  return (
    <div className="flex min-h-screen justify-center">
      <nav className="flex justify-between items-center h-fit w-full px-10 py-3">
        <h1 className="text-3xl">Community app</h1>
        {session ? (
          <div className="flex items-center gap-10 h-fit">
            <div className="flex items-center justify-center gap-4">
              <Avatar>
                <AvatarImage src={session?.user?.image} />
                <AvatarFallback>{session?.user?.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col items-start">
                <h1 className="text-sm font-sans">{session?.user?.name}</h1>
                <h1 className="text-xs font-sans">{session?.user?.email}</h1>
              </div>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut("google");
              }}
            >
              <button
                type="submit"
                className="text-sm border border-black px-5 py-3 rounded-full"
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-5 justify-center items-center">
            <Link
              href="/auth/Signin"
              className="text-sm border border-black px-5 py-3 rounded-full"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}
