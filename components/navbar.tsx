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
        <nav className="w-full py-4 px-4">
            <div className="px-4">
                <h1 className="text-2xl text-indigo-500 dark:text-indigo-400">
                    Wired File
                </h1>
            </div>
            {/* responsive menu */}
            <div>
                {/* nav links */}
                <ul className="border w-full absolute left-0 pl-4">
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
                    
                </ul>
            </div>
        </nav>
    )
}

