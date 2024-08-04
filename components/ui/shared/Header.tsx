import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import MobileNav from "./MobileNav";
import { Button } from "../button";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-4 py-5 shadow-sm shadow-slate-400/40 ">
      <div className="flex items-center gap-5">
        <MobileNav />
        <h1 className="text-xl font-bold text-gray-800">My App</h1>
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
