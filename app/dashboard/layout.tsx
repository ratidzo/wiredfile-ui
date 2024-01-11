
export default function Layout({children}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex w-full h-full pt-[4.5rem]">
            <div className="flex justify-start w-[20vw] border">
                Sidebar
            </div>
            <div className="flex justify-center w-[80vw] border">
                {children}
            </div>
        </div>
    )
}