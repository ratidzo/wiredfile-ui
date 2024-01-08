"use client"

import { Button } from "@/components/ui/button"
import { GearIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
    DropdownMenuLabel
    
} from "@/components/ui/dropdown-menu"


export default function Navbar() {
    const { setTheme } = useTheme()

    return (
        <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center  py-6 px-10 dark:border-b">
            <h1 className="text-2xl font-semibold text-indigo-500 dark:text-indigo-400">
                Wired File
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-[25rem] shrink-0">
                <Button className="p-0" variant="link">
                    Product
                </Button>
                <Button className="p-0" variant="link">
                    Company
                </Button>
                <Button className="p-0" variant="link">
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

            </div>
            <Button>
                Sign in
            </Button>
        </nav>
    )
}