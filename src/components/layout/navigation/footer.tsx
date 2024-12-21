"use client";

import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import Link, { LinkProps } from 'next/link';
import { Large } from '@/components/ui/typography';
import { links } from '.';
import { LinkHoverAnim } from './header';

const socials = [
    {
        name: "E-Mail",
        link: "mailto:contact@kayf.app",
        icon: <Mail className='text-secondary' />
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ahujaankush/",
        icon: <Linkedin className='text-secondary' />
    },
    {
        name: "GitHub",
        link: "https://github.com/KayfApp",
        icon: <Github className='text-secondary' />
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/kayf.app/",
        icon: <Instagram className='text-secondary' />
    }
];

export default function Footer() {
    return (
        <div className="flex flex-col p-8 space-y-4 grow justify-center items-center bg-secondary">
            <div className="flex flex-row space-x-5 self-center">
                {socials.map((e, i) => (
                    <Tooltip key={`tooltip-footer-icons-${i}`}>
                        <TooltipTrigger>
                            <Link className="flex rounded-full items-center justify-center w-10 h-10 bg-foreground hover:bg-opacity-80 transition" href={e.link} target="_blank" rel="noopener noreferrer">
                                {e.icon}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            {e.name}
                        </TooltipContent>
                    </Tooltip>
                ))}
            </div>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-5 md:space-y-0 self-center">
                {
                    links.map((e, i) => {
                        return (<LinkHoverAnim key={`${i}-footer-navigation-item`} href={e.link}>{e.label}</LinkHoverAnim>)
                    })
                }
                <LinkHoverAnim href="/privacy">Privacy policy</LinkHoverAnim>
            </div>
            <Large className="flex self-center">
                &copy;	2024 Kayf.app
            </Large>
        </div>
    );
}
