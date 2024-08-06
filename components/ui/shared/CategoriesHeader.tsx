"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CATEGORIES } from "@/constants";

export default function CategoriesHeader() {
  return (
    <div className="p-4 bg-transparent text-white hidden md:flex ">
      <NavigationMenu>
        <NavigationMenuList className="gap-2 ">
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "px-4 py-2 bg-blue-800/70 rounded-lg hover:bg-blue-800 transition duration-300"
                )}
              >
                Programming
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {CATEGORIES.slice(0, 4).map((category) => (
            <NavigationMenuItem key={category.id}>
              <NavigationMenuTrigger className="px-4 py-2 bg-blue-950/40 rounded-lg  hover:bg-blue-900  transition duration-300">
                {category.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent className="mt-2 rounded-lg shadow-lg bg-gray-950 text-white">
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  {category.topics.map((topic) => (
                    <ListItem key={topic.id} href="#" title={topic.title}>
                      {topic.title}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-gray-600">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
