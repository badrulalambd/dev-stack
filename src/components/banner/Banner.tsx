
import stack from "../../assets/banner-stack.png"

export default function Banner() {

    return (
        <>
            <div className="bg-yellow-100">
                <section className="container mx-auto py-10 flex justify-between items-center gap-5">
                    <div>
                        <div>
                            <h1>Build Your Ideal Development Stack</h1>
                            <p>Explore frontend, backend, database, and tooling options,
                                compare them side by side, and put together the stack that fits your
                                next project.</p>
                        </div>
                        <div>
                            <button className="btn btn-active btn-secondary">Secondary</button>
                            <button className="btn btn-outline btn-secondary">Secondary</button>
                        </div>
                    </div>
                    <div>
                        <img src={stack} alt="banner image" />
                    </div>
                </section>
            </div>
        </>
    )
}