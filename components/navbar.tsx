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


export default function Navbar() {
    const [ menuOpen, setMenuOpen] = useState(false);
    const { setTheme } = useTheme()
    const currentPath = usePathname()
    return (
        <nav className="flex flex-col md:flex-row md:justify-between md:items-center  py-6 px-10 dark:border-b">
            <h1 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-400">
                Wired File
            </h1>
            <div className="flex flex-col gap-4 py-4 md:py-0 md:flex-row items-start md:items-center justify-center md:gap-12 w-[25rem] shrink-0">
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
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                
                ): (
                    <Link href={'/dashboard'}>
                        <Button className="w-[83vw] md:w-[78px]">
                            Sign in
                        </Button>
                    </Link>
                )
            }

            <Button variant='outline' size='icon' onClick={() =>
                menuOpen ? setMenuOpen(false): setMenuOpen(true)
            }>
                {
                    menuOpen ? (
                        <Cross1Icon/>
                    ): (
                        <HamburgerMenuIcon />
                    )
                }
            </Button>
            

        </nav>
    )
}

