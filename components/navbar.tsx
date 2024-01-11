"use client"

import { Istok_Web } from "next/font/google"
import { Button } from "@/components/ui/button"
import {
     GearIcon,
     MoonIcon, 
     SunIcon,
     HamburgerMenuIcon,
     Cross1Icon,
     ExitIcon,
     DesktopIcon
     
     
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel
    
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar'
import { usePathname } from "next/navigation"
import { useState } from "react"



const istok_web_bold = Istok_Web({
    weight: '700',
    style: 'normal',
    subsets: ['latin']
})


export default function Navbar() {
    const { setTheme } = useTheme()
    const currentPath = usePathname()
    const [open, setOpen] = useState(false)

    const links = [
        {
            name: 'Product',
            link: '/'
        },

        {
            name: 'Company',
            link: '/'
        },

        {
            name: 'FAQ',
            link: '/'
        }, 

        {
            name: 'Blog',
            link: '/'
        }
    ]

    return (
    
        <nav className="px-10 py-4 flex w-full justify-between fixed bg-white/80 dark:bg-[#020817]/50 border-b backdrop-blur-md">
            {/* logo */}
            <div>
                <h1 className={`${istok_web_bold.className} text-3xl font-bold text-indigo-500 dark:text-indigo-400`}>
                    Wired File
                </h1>
            </div>
            {/* nav menu */}
            <ul className="flex gap-6">
            {
                links.map(link => (
                    <li key={link.name}>
                        <Link href={link.link} >
                            <Button variant="ghost" className="font-bold">
                                { link.name }
                            </Button>
                        </Link>
                    </li>
                ))
            }
            
            {/* theme control dropdown menu */}
                    <li className="">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="icon" className="">
                                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                    <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                    <span className="sr-only">Toggle theme</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="start">
                                <DropdownMenuLabel>
                                    Theme
                                </DropdownMenuLabel>
                                <DropdownMenuItem className="gap-2 w-[13.375rem]" onClick={() => setTheme("light")}>
                                    <SunIcon className="h-[1.2rem] w-[1.2rem]"/>
                                        <h1>Light</h1>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2 w-[13.375rem]" onClick={() => setTheme("dark")}>
                                    <MoonIcon className="h-[1.2rem] w-[1.2rem]"/>
                                    <h1>Dark</h1>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="gap-2 w-[13.375rem]" onClick={() => setTheme("system")}>
                                    <DesktopIcon className="h-[1.2rem] w-[1.2rem]"/>
                                    <h1>System</h1>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
            </ul>
                            
            <div className="w-20 flex justify-end">
                {
                // scarfold: conditionally render the avatar or sign in button
                currentPath === '/dashboard' ?
                    (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="">
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback> CN </AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>
                                    Profile
                                </DropdownMenuLabel>
                                <DropdownMenuItem className="gap-2 w-[13.375rem]">
                                    <GearIcon className="w-[1.2rem] h-[1.2rem]" />
                                    <h1>Settings</h1>
                                </DropdownMenuItem>
                                <Link href={'/'}>
                                    <DropdownMenuItem className="gap-2">
                                        <ExitIcon className="w-[1.2rem] h-[1.2rem]" />
                                        <h1>Sign out</h1>
                                    </DropdownMenuItem>
                                </Link>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ): 
                    (
                        <Link href={'/dashboard'}>
                            <Button className="w-full">Sign in </Button>
                        </Link>
                    )
                                     
                }
            </div> 
        </nav>
    )
}