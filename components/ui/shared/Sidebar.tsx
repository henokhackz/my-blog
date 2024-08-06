import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NAVIGATION_ITEMS } from "@/constants/index";
import { getUserById } from "@/lib/actions/user.actions";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { Button } from "../button";
import { AiOutlineHome } from "react-icons/ai";
import { PiPenNibStraightLight } from "react-icons/pi";
import Link from "next/link";

const Sidebar = async () => {
  const { userId } = await auth();
  const { username } = await getUserById(userId as string);

  return (
    <div className="hidden min-h-full max-h-screen overflow-auto p-2 shadow-md shadow-slate-600 bg-slate-950 border-t-transparent border-slate-600/40 border-b-transparent border-l-transparent border flex-col md:flex justify-between items-center h-screen">
      <Image
        src="/assets/images/logo-no-background.png"
        alt="logo"
        height={40}
        width={160}
        className="mb-5"
      />
      <div className="flex flex-col gap-3 w-full">
        <Link href={"/"}>
          <div className="flex justify-start text-md gap-2 items-center p-3  text-white bg-gradient-blue rounded hover:bg-gray-600/70 cursor-pointer transition-all duration-300">
            <AiOutlineHome /> Home
          </div>
        </Link>
        <Link href={"/create"}>
          <div className="flex justify-start  items-center gap-2 p-3 text-md text-white cursor-pointer bg-gray-700/40 rounded hover:bg-gradient-blue transition-all duration-300">
            <PiPenNibStraightLight />
            create new blog
          </div>
        </Link>

        {NAVIGATION_ITEMS.map((item) => (
          <Accordion
            type="single"
            collapsible
            key={item.id}
            className="w-full rounded-full"
          >
            <AccordionItem value={item.id}>
              <AccordionTrigger className="flex justify-between items-center p-3 text-md underline-none text-white bg-gray-700/40 rounded hover:bg-gradient-blue transition-all duration-300">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="pl-3">
                {Array.isArray(item.content) ? (
                  <ul>
                    {item.content.map((subitem) => (
                      <li
                        key={subitem.id}
                        className="pl-4 py-2 my-1 text-sm text-gray-200 hover:text-white hover:bg-gray-600 rounded transition-all duration-300 cursor-pointer"
                      >
                        {subitem.title}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="p-2 text-gray-300">{item.title}</p>
                )}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      <SignedIn>
        <div className="flex w-full gap-5 items-center mt-5">
          <UserButton />
          <p className="text-white">{username}</p>
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mt-5 w-full">
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
};

export default Sidebar;
