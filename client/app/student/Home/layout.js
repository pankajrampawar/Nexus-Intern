import Sidebar from "../../ui/sidebar"
import MobileMenu from "@/app/ui/mobileMenu"

export default function HomeLayout({ children }) {
    return (
        <main className="min-h-screen flex sm:overflow-hidden">
            <nav className="min-h-full m-3">
                <div className="hidden sm:block h-full">
                    <Sidebar/> 
                </div>

                <div className="sm:hidden">
                    <MobileMenu/>
                </div>
            </nav>

            <section className="min-h-full overflow-y-auto flex-grow">
                {children}
            </section>
        </main>
    )
}