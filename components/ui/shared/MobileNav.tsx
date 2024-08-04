import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = () => {
  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger className=" text-white bg-blue-600 rounded-md">
          Menu
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-lg font-bold">Navigation</SheetTitle>
          </SheetHeader>
          <nav className="mt-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="block p-2 text-white bg-gray-800 rounded-md"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="block p-2 text-white bg-gray-800 rounded-md"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block p-2 text-white bg-gray-800 rounded-md"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block p-2 text-white bg-gray-800 rounded-md"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
