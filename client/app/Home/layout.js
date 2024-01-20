import Sidebar from "../ui/sidebar"

export default function HomeLayout({ children }) {
    return (
        <main className="min-h-screen flex ">
            <nav className="h-full m-3">
                <div className="hidden sm:blcok">
                    <Sidebar/>
                </div>

                <div>
                    <MobileMenu/>
                </div>
            </nav>
        </main>
    )
}