"use client"

import Link, { LinkProps } from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { Moon, Star, Sun } from "lucide-react"
import { Button } from "@/components/ui/button";
import logo from "@/../public/logo.svg"
import Image from "next/image";
import { links } from ".";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Large, Paragraph, Small } from "@/components/ui/typography";

export function LinkHoverAnim({ children, ...props }: LinkProps & { children: React.ReactNode, className?: string }) {
    return (
        <Link
            className="relative text-md w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-primary after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-300 after:origin-center"
            {...props}
        >
            {children}
        </Link>
    );
}


function ModeToggle() {
    const { setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

function ListItem({ className, title, children, ...props }: LinkProps & { children: React.ReactNode, title: string, className?: string }) {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}

export default function Header() {
    const { resolvedTheme } = useTheme()
    return (
        <div className="flex grow flex-col fixed w-screen py-6 backdrop-blur-md self-center z-[2] items-center">
            <div className="flex grow flex-col w-4/5">
                <div className="flex justify-between items-center">
                    <div className="flex justify-start">
                        <Link href="/" className="flex items-center" prefetch={false}>
                            <Image src={logo} alt="Logo" height={30} className={`absolute ${resolvedTheme == 'dark' ? 'invert' : ''}`} />
                            <span className="text-2xl pl-12">Kayf</span>
                        </Link>
                    </div>

                    <div className="flex flex-row items-center justify-center space-x-2 lg:hidden">
                        <Sheet>
                            <SheetTrigger>
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                                </svg>
                            </SheetTrigger>
                            <SheetContent side="top" className="space-y-4">
                                <SheetHeader>
                                    <SheetTitle className="text-xl">Kayf.app</SheetTitle>
                                    <SheetDescription>
                                        We help you save time for the important things.
                                    </SheetDescription>
                                </SheetHeader>
                                <div className="space-y-4 mt-4">
                                    <LinkHoverAnim href="/">Home</LinkHoverAnim>
                                    {
                                        links.map((e, i) => {
                                            return (
                                                <React.Fragment key={`${i}-header-mobile-navigation-item`}>
                                                    {
                                                        e.items ? (
                                                            <>
                                                                <Paragraph>{e.label}</Paragraph>
                                                                <div className="flex flex-col space-y-4">
                                                                    {e.items?.map((f, j) => (
                                                                        <LinkHoverAnim className="ml-4 block" key={`${i}-${j}-header-mobile-navigation-item`} href={f.link}>{f.label}</LinkHoverAnim>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : <LinkHoverAnim href={e.link}>{e.label}</LinkHoverAnim>
                                                    }
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                                <div className="flex align-items space-x-2">
                                    <Link href="https://github.com/KayfApp">
                                        <Button className="bg-white hover:bg-white/75 text-black text-md">
                                            <Star className="mr-1" />
                                            Star
                                        </Button>
                                    </Link>

                                    <ModeToggle />
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="hidden lg:flex space-x-12 text-xl">
                        <NavigationMenu>
                            <NavigationMenuList>
                                {
                                    links.map((e, i) => {
                                        return (<NavigationMenuItem key={`navigation-menu-item-desktop-${i}`}>
                                            {e.items ?
                                                (<NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 focus:bg-transparent">{e.label}</NavigationMenuTrigger>)
                                                :
                                                (<Link href={e.link} legacyBehavior passHref>
                                                    <NavigationMenuLink className={`${navigationMenuTriggerStyle()} hover:bg-accent/50 bg-transparent focus:bg-transparent`}>
                                                        {e.label}
                                                    </NavigationMenuLink>
                                                </Link>
                                                )
                                            }
                                            {e.items ?
                                                (<NavigationMenuContent>
                                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                        <li className="row-span-3">
                                                            <NavigationMenuLink>
                                                                <div
                                                                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                                >
                                                                    <Large>
                                                                        Documentation
                                                                    </Large>
                                                                    <Paragraph className="text-sm leading-snug !mt-0">
                                                                        Our products are easy to use and well-documented. Explore our pages, and feel free to reach out with any questions!
                                                                    </Paragraph>
                                                                </div>
                                                            </NavigationMenuLink>
                                                        </li>
                                                        {
                                                            e.items?.map((f, j) => (
                                                                <ListItem key={`navigation-item-${i}-${j}`} href={f.link} title={f.label}>
                                                                    {f.description}
                                                                </ListItem>
                                                            ))
                                                        }
                                                    </ul>
                                                </NavigationMenuContent>)
                                                : null}
                                        </NavigationMenuItem>)
                                    })
                                }
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="hidden lg:flex align-items space-x-4">
                        <ModeToggle />
                        <Link href="https://github.com/KayfApp">
                            <Button className="bg-white hover:bg-white/75 text-black text-md">
                                <Star className="mr-1" />
                                Star
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
