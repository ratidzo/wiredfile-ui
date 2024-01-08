import { Button } from "@/components/ui/button"


export default function Navbar() {

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
            </div>
            <Button>
                Sign in
            </Button>
        </nav>
    )
}