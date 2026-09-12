
import logo from "../../assets/logo-text.png"

export default function NavBar() {

    return (
        <>
            <div>
                <header className="container mx-auto flex justify-between items-center gap-5 p-5">
                    <div>
                        <img className="cursor-pointer" src={logo} alt="Logo" />
                    </div>

                    <nav>
                        <ul className="flex gap-5">
                            <li className="text-gray-600 font-semibold cursor-pointer">Home</li>
                            <li className="text-gray-600 font-semibold cursor-pointer">Technologies</li>
                            <li className="text-gray-600 font-semibold cursor-pointer">Projects</li>
                            <li className="text-gray-600 font-semibold cursor-pointer">About</li>
                            <li className="text-gray-600 font-semibold cursor-pointer">Contact</li>
                        </ul>
                    </nav>

                    <div className="flex gap-5">
                        <button className="btn-ghost text-gray-600 font-semibold cursor-pointer">Sign In</button>
                        <button className="btn btn-secondary rounded-4xl px-6 py-2 text-white font-semibold cursor-pointer">Sign Up</button>
                    </div>
                </header>
                <hr className="text-gray-100" />
            </div>
        </>
    )
}