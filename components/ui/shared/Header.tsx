import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import { Button } from "../button";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full  py-5 pr-4  bg-slate-950 pl-2 md:pl-0 shadow-sm border border-l-transparent border-slate-600/40  shadow-slate-300">
      <div className="flex items-center justify-start md:justify-center w-[250px] ">
        <MobileNav />
        <h2 className="text-2xl text-white leading-10 tracking-widest hidden md:block">
          MY BlOG
        </h2>
      </div>
      <div className="flex items-center gap-5">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button className="bg-gradient-blue ">Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
};

export default Header;
