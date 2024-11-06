import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await auth();

  console.log(session);

  if (session) redirect("/");

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center min-h-screen ">
        {session ? (
          <div className="flex flex-col items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <Image
                src={session?.user?.image}
                width={200}
                height={200}
                className="rounded-full"
              />
              <h1 className="text-xl font-bold  font-sans">
                {session?.user?.name}
              </h1>
              <h1 className="text-sm font-bold font-sans">
                {session?.user?.email}
              </h1>
            </div>
            <form
              action={async () => {
                "use server";
                await signOut("google");
              }}
            >
              <button
                type="submit"
                className="text-xl border border-black px-10 py-5 rounded-full"
              >
                Sign Out
              </button>
            </form>
          </div>
        ) : (
          <div className="flex flex-col gap-5 justify-center items-center">
            <h1 className="text-3xl">Sign Up</h1>
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="text-xl border border-black px-10 py-5 rounded-full"
              >
                Signin with Google
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
