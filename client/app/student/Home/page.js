import InfoCard from "../ui/InforCard"

export default function Home() {
    return (
        <main className="flex flex-col gap-20 text-white">
            <section className="flex-1 relative rounded-b-3xl mr-5">
                <div className="overflow-hidden max-h-[400px] relative rounded-b-3xl z-10">
                    <img src="/internship.jpg" alt="interns" className="-mt-40"/>
                </div>

                <div className="overlay z-0">
                </div>

                <div className="absolute z-40 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl text-center font-bold leading-snug">
                    Find the  best internships personalized just for you..
                </div>
            </section>

            <section className="flex-1 flex flex-col gap-10">
                <div>
                    <h1 className="text-3xl font-semibold hover-pointer">Technology</h1>
                    <div>
                        <InfoCard/>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold hover-pointer">Banking</h1>
                    <div>
                        <InfoCard/>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold hover-pointer">EdTech</h1>
                    <div>
                        <InfoCard/>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold hover-pointer">Agency</h1>
                    <div>
                        <InfoCard/>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold hover-pointer">Healthcare</h1>
                    <div>
                        <InfoCard/>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-semibold hover-pointer">Hardware</h1>
                    <div>
                        <InfoCard/>
                    </div>
                </div>
            </section>
        </main>
    )
}