
import Link from 'next/link'
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
    return (
        <div className="flex w-full h-full pt-[4.5rem]">
            <div className="flex justify-start w-[20vw] border pt-10 pl-10">
                <ul>
                    {
                        links.map(link => (
                            <li key={link.name}>
                                <Link href={link.link}>
                                    <Button variant="ghost" className='flex gap-2 w-[10rem] justify-start'>
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
            <div className="flex justify-center w-[80vw] border">
                {children}
            </div>
        </div>
    )
}