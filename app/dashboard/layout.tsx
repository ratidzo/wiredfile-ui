"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
    DashboardIcon,
    MagnifyingGlassIcon,
    BarChartIcon,
    BackpackIcon,
    ArchiveIcon,
    CalendarIcon,
    GearIcon,
    ExitIcon
} from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

// Dashboard navigation - side-menu links.
const links = [
    {
        name: 'Home',
        link: '/dashboard',
        icon: DashboardIcon
    },
    {
        name: 'Database',
        link: '/dashboard/database',
        icon: MagnifyingGlassIcon
    }, 
    {
        name: 'Financials',
        link: '/dashboard/financials',
        icon: BarChartIcon
    },
    {
        name: 'Banking',
        link: '/dashboard/banking',
        icon: BackpackIcon
    },
    {
        name: 'Inventory',
        link: '/dashboard/inventory',
        icon: ArchiveIcon
    },
    {
        name: 'Calendar',
        link: '/dashboard/calendar',
        icon: CalendarIcon
    },
    {
        name: 'Settings',
        link: '/dashboard/settings',
        icon: GearIcon
    },
    {
        name: 'Sign out', // Will be replaced by a sign out function.
        link: '/',
        icon: ExitIcon
    }
]


export default function Layout({children}: {
    children: React.ReactNode
}) {
    const currentPath = usePathname();

    return (
        <div className="flex w-full h-full pt-[4.5rem]">
            {/* sidebar - turn on border to see layout. */}
            <div className="flex justify-start w-[20vw]  pt-10 pl-6">
                <ul className='[&>*:nth-child(7)]:mt-[2rem]'>
                    {
                        links.map(link => (
                            <li key={link.name} className="my-1 ">
                                <Link href={link.link}>
                                    {/* Depending on the `currentPath` variable, highlight each sidemenu link if it matches with the browser's current path */}
                                    <Button variant="ghost" className={`flex gap-2 w-[13.375rem] justify-start ${
                                        currentPath === link.link ? 'bg-black text-white dark:bg-white dark:text-black hover:bg-black/85 hover:text-white dark:hover:bg-white/85': ''
                                    }`}>
                                        {
                                            <link.icon className="h-[1.2rem] w-[1.2rem]"/>
                                        }
                                        {
                                            link.name
                                        }
                                    </Button>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/* Function section - turn on border to see layout */}
            <div className="flex justify-center w-[80vw] ">
                {children}
            </div>
        </div>
    )
}