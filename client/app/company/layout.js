import Sidebar from "../ui/sidebar"


export default function CompanyLayout({ children }) {
    return (
        <main className='h-screen bg-surface-color overflow-hidden flex flex-row'>
            <nav className="h-full p-6 overflow-y-auto">
                <div className="h-full">
                    <Sidebar/> 
                </div>
            </nav>

            <section className="flex mx-auto my-auto">
                {children}
            </section>
        </main>
    )
}