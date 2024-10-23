import { MenuIcon, Star } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import Image from "next/image";
import logo from "@/../public/logo.svg"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function LinkHoverAnim({ children, className = '', ...props }: LinkProps & { children: React.ReactNode, className?: string }) {

  return (
    <Link
      className={`relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export default function Header() {

  return (
    <div className="fixed w-full flex flex-row grow border-b-2 px-6 py-4 backdrop-blur-sm bg-black/90">
      <div className="flex justify-start">
        <Link href="/" className="flex items-center" prefetch={false}>
          <Image src={logo} alt="Logo" height={40} className="absolute invert" />
          <span className="text-3xl pl-14">Kayf</span>
        </Link>
      </div>
      <div className="flex grow items-center justify-center">
        <div className="hidden lg:flex space-x-8">
          {
            [
              { label: 'Product', href: '/dashboard/product' },
              { label: 'Download', href: '/dashboard/download' },
              { label: 'Pricing', href: '/dashboard/pricing' },
              { label: 'Team', href: '/dashboard/team' },
              { label: 'Blog', href: '/dashboard/blog' }
            ].map((item, i) => (
              <LinkHoverAnim href={item.href} key={`navigation-mobile-item-${i}`} className="text-2xl" prefetch={false}>
                {item.label}
              </LinkHoverAnim>
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
            <SheetHeader className="flex flex-row justify-content-center">
              <Link href="/">
              <Image src={logo} alt="Logo" height={40} className="absolute invert" />
              <SheetTitle className="text-3xl pl-14 text-left font-normal">
                Kayf
              </SheetTitle>
              </Link>
              <VisuallyHidden>
                <SheetDescription>
                  Navigation Menu
                </SheetDescription>
              </VisuallyHidden>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              {
                [
                  { label: 'Product', href: '/dashboard/product' },
                  { label: 'Download', href: '/dashboard/download' },
                  { label: 'Pricing', href: '/dashboard/pricing' },
                  { label: 'Team', href: '/dashboard/team' },
                  { label: 'Blog', href: '/dashboard/blog' }
                ].map((item, i) => (
                  <LinkHoverAnim href={item.href} key={`navigation-mobile-item-${i}`} className="text-2xl" prefetch={false}>
                    {item.label}
                  </LinkHoverAnim>
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
