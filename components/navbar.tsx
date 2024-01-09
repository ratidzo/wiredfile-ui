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
    const [ menuOpen, setMenuOpen] = useState(false);
    const { setTheme } = useTheme()
    const currentPath = usePathname()
    return (
        <nav className="flex flex-col md:flex-row md:w-[100vw]  md:items-center  py-6 px-10 dark:border-b">
            <h1 className="text-2xl md:w-1/3 font-semibold text-indigo-500 dark:text-indigo-400">
                Wired File
            </h1>
            {/* Responsive Menu */}
            <AnimatePresence>
                {
                menuOpen && (
                    <motion.div
                            
                            initial={{height: 0, opacity: 0}}
                            animate={{
                                height: "auto", opacity: 1,
                                
                        }}
                            exit={{height:0, opacity: 0}}
                            
                            
                            className="md:flex md:w-2/3">
                            <div
                                className="flex flex-col gap-4 py-4 md:py-0 md:flex-row items-start md:items-center justify-center md:gap-12 w-[25rem] shrink-0">
                                <Button className={`p-0 ${
                                    currentPath.startsWith('/dashboard') ? 'hidden':
                                    'block'
                                }`} variant="link">
                                    Product
                                </Button>
                                <Button className={`p-0 ${
                                    currentPath.startsWith('/dashboard') ? 'hidden':
                                    'block'
                                }`} variant="link">
                                    Company
                                </Button>
                                <Button className={`p-0 ${
                                    currentPath.startsWith('/dashboard') ? 'hidden':
                                    'block'
                                }`} variant="link">
                                    FAQ
                                </Button>
                                {/* Theme control dropdown menu */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon">
                                            <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                            <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-90" />
                                            <span className="sr-only">Toggle theme</span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="start">
                                        <DropdownMenuLabel>
                                            Theme
                                        </DropdownMenuLabel>
                                        <DropdownMenuItem className="flex gap-2 w-[13.375rem]" onClick={() => setTheme("light") }>
                                            <SunIcon className="h-[1.2rem] w-[1.2rem]" />
                                            <h1>
                                                Light
                                            </h1>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex gap-2 w-[13.375rem]" onClick={() => setTheme("dark") }>
                                            <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
                                            <h1>
                                                Dark
                                            </h1>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex gap-2 w-[13.375rem]" onClick={() => setTheme("system") }>
                                            <GearIcon className="h-[1.2rem] w-[1.2rem]" />
                                            <h1>
                                                System
                                            </h1>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Separator className="w-[82vw] my-4 md:hidden" orientation="horizontal" />

                            </div>
                    
                                {
                                    currentPath.startsWith('/dashboard') ? 
                                    (
                                        <Avatar className="md:absolute md:right-10">
                                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    
                                    ): (
                                        <Link href={'/dashboard'}>
                                            <Button onClick={() => setMenuOpen(false)} className="w-[83vw] md:w-[78px] md:absolute md:right-10">
                                                Sign in
                                            </Button>
                                        </Link>
                                    )
                                }
                    </motion.div>
                )}
            </AnimatePresence>

            <Button className="md:hidden absolute right-10" 
                variant='outline' size='icon' onClick={() =>
                menuOpen ? setMenuOpen(false): setMenuOpen(true)
            }>
                {
                    menuOpen ? (
                        <Cross1Icon className="w-6 h-6"/>
                    ): (
                        <HamburgerMenuIcon className="w-6 h-6" />
                    )
                }
            </Button>
            

        </nav>
    )
}

