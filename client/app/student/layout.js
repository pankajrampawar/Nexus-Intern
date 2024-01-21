import Sidebar from "../ui/sidebar"
import MobileMenu from "@/app/ui/mobileMenu"

export default function HomeLayout({ children }) {
    return (
        <main className="h-screen flex sm:flex-row flex-col sm:overflow-hidden">
            <nav className="m-3 overflow-y-auto sm:min-w-[100px] hidden sm:block">
                <div className="hidden sm:block h-full w-fit">
                    <Sidebar/> 
                </div>
            </nav>

            <nav className="sm:hidden">
                <MobileMenu/>
            </nav>

            <section className="min-h-full overflow-y-auto flex-grow sm:ml-52">
                {children}
            </section>
        </main>
    )
}