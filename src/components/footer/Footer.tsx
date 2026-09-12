
import logo from "../../assets/logo-text.png"

export default function Footer() {

    return (
        <>
            <footer className="border-t border-t-gray-100 py-10">
                <div className="container mx-auto p-5 flex flex-col gap-10">
                    <div className="flex flex-row lg:gap-20">
                        <div className="flex-2">
                            <div className="flex flex-col items-center lg:items-start gap-3">
                                <img src={logo} alt="Logo" />
                                <span className="text-gray-500 text-center lg:text-start">Curated tools, technologies, and resources for developers building
                                    modern software.</span>
                                <ul className="flex gap-3 text-gray-700 mt-2">
                                    <li><a href="#">GitHub</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex-3 hidden lg:block">
                            <div className="flex gap-20">
                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold">PRODUCT</h4>
                                    <ul className="flex flex-col gap-3 text-gray-500 mt-3">
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#">Technologies</a></li>
                                        <li><a href="#">Projects</a></li>
                                    </ul>
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold">COMPANY</h4>
                                    <ul className="flex flex-col gap-3 text-gray-500 mt-3">
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>

                                <div className="flex-1">
                                    <h4 className="text-lg font-semibold">LEGAL</h4>
                                    <ul className="flex flex-col gap-3 text-gray-500 mt-3">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <hr className="text-gray-100" />
                    </div>

                    <div className="flex justify-between gap-5">
                        <div>
                            <p className="text-gray-500">© 2026 Dev Stack. All rights reserved.</p>
                        </div>
                        <div>
                            <ul className="flex gap-3 text-gray-500">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}