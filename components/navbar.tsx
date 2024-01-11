"use client"

import { Button } from "@/components/ui/button"
import {
     GearIcon,
     MoonIcon, 
     SunIcon,
     HamburgerMenuIcon,
     Cross1Icon
     
} from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel
    
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from '@/components/ui/avatar'
import { usePathname } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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
    <nav className="w-full fixed top-0 left-0">
        <div className="w-full py-4 px-4 bg-indigo-50 dark:bg-indigo-950">
            {/* logo */}
            <div className="px-4">
                <h1 className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">
                    Wired File
                </h1>
            </div>
            {/* responsive menu */}
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            key="navigation"
                            initial={{y: -400, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            exit={{y: -400, opacity: 0}}
                            transition={{duration: .5}}
                            className="relative z-[-1]">
                            {/* nav links */}
                            <ul className="absolute left-0 w-full py-4"
>
                                {
                                    links.map(link => (
                                        <li key={link.name} className="my-2">
                                            <Link href={link.link} >
                                            <Button variant="link">
                                                { link.name }
                                            </Button>
                                            </Link>
                                        </li>
                                    ))
                                }
                                {/* theme control dropdown menu */}
                                <li className="mt-4">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline" size="icon" className="ml-3">
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
                                                <GearIcon className="h-[1.2rem] w-[1.2rem]"/>
                                                <h1>System</h1>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                                <Separator className="my-6" />
                                {
                                    // scarfold: conditionally render the avatar or sign in button
                                    currentPath === '/dashboard' ?
                                    (
                                        <Avatar className="ml-3">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>
                                                CN
                                            </AvatarFallback>
                                        </Avatar>
                                    ): 
                                    (
                                        <Link href={'/dashboard'}>
                                            <Button className="w-full">  
                                                 Sign in
                                            </Button>
                                        </Link>
                                    )
                                }
                                <Separator className="my-6" />
                            </ul>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            <Button onClick={() => setOpen(!open)} className="absolute right-8 top-4" variant="outline" size="icon">
                {
                  open ? (<Cross1Icon className="h-6 w-6" />): 
                  (<HamburgerMenuIcon className="h-6 w-6" />)
                }
            </Button>
        </div>
    </nav>
    )
}

