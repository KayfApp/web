"use client"
import { MenuIcon, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import logo from "@/../public/logo.svg"

export default function Header() {
  return (
    <div className="fixed w-full flex flex-row grow border-b-2 px-6 py-4">
      <div className="flex justify-start">
        <Link href="#" className="flex items-center" prefetch={false}>
          <Image src={logo} alt="Logo" height={40} className="absolute invert" />
          <span className="text-3xl pl-14">Kayf</span>
        </Link>
      </div>
      <div className="flex grow items-center justify-center">
        <div className="hidden lg:flex space-x-8">
          {
            ['Product', 'Download', 'Pricing', 'Team', 'Blog'].map((e, i) => (
              <Link href="#" key={`navigation-item-${i}`} className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
                {e}
              </Link>
            ))
          }
        </div>
      </div>
      <div className="flex justify-end">
        <div className="hidden lg:flex">
          <Link href="https://github.com/KayfApp">
            <Button className="text-xl space-x-1">
              <Star />
              <span>Star</span>
            </Button>
          </Link>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="flex lg:hidden bg-transparent">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <div className="flex flex-col space-y-4">
              <Link href="#" className="flex items-center" prefetch={false}>
                <Image src={logo} alt="Logo" height={40} className="absolute invert" />
                <span className="text-3xl pl-14">Kayf</span>
              </Link>
              {
                ['Product', 'Download', 'Pricing', 'Team', 'Blog'].map((e, i) => (
                  <Link href="#" key={`navigation-mobile-item-${i}`} className="text-2xl font-medium hover:underline underline-offset-4" prefetch={false}>
                    {e}
                  </Link>
                ))
              }
              <Link href="https://github.com/KayfApp">
                <Button className="text-black text-lg"><Star className="mr-1" />Star</Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
