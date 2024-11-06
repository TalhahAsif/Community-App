import { auth, signIn, signOut } from "@/auth";
import { Loginform } from "@/components/Loginform/loginform";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Signin() {
  const session = await auth();

  console.log(session);

  if (session) redirect("/");

  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center min-h-screen ">
        <div className="flex flex-col gap-5 justify-center items-center">
          <Loginform />
          <p>OR</p>
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
      </div>
    </>
  );
}
