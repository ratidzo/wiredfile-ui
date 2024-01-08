"use client"

import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
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
        <nav className="flex justify-between items-center py-6 px-10">
            <h1 className="text-2xl font-semibold text-indigo-500">
                Wired File
            </h1>
            <div>
                <Button variant="link">
                    Product
                </Button>
                <Button variant="link">
                    Company
                </Button>
                <Button variant="link">
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
                    </DropdownMenuContent>
                    
                </DropdownMenu>

            </div>
            <Button>
                Sign in
            </Button>
        </nav>
    )
}