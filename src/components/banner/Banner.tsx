
import stack from "../../assets/banner-stack.png"

export default function Banner() {

    return (
        <>
            <div className="">
                <section className="p-5 container mx-auto py-10 flex flex-col lg:flex-row justify-between  gap-0 lg:gap-5 mt-30 lg:mt-20">
                    <div className="flex-1 flex flex-col justify-center gap-8">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-gray-800 text-center lg:text-start text-5xl lg:text-7xl font-extrabold">Build Your Ideal<br />
                                <span className="bg-linear-to-r from-brand-orange via-brand-pink to-brand-purple bg-clip-text text-transparent">Development Stack</span></h1>
                            <p className="text-center lg:text-start text-[20px] lg:text-[25px] text-gray-500">Explore frontend, backend, database, and tooling options,
                                compare them side by side, and put together the stack that fits your
                                next project.</p>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-3">
                            <button
                                className="btn border-0 bg-linear-to-r from-brand-start to-brand-end px-7 py-3 text-white font-semibold rounded-xl shadow-md shadow-pink-200/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-pink-200/50"
                            >
                                Explore Technologies
                            </button>

                            <button
                                className="btn bg-white px-7 py-3 text-gray-700 font-semibold rounded-xl border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center items-center]">
                        <img className="-my-10 lg:my-0" src={stack} alt="banner image" />
                    </div>
                </section>
            </div>
        </>
    )
}