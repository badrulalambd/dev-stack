
import { useState } from "react"
import logo from "../../assets/logo-text.png"
import hamburger from "../../assets/hamburger.png"

export default function NavBar() {

    const [activeMenu, setActiveMenu] = useState("Home");

    return (
        <>
            <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-999">
                <header className="container mx-auto flex justify-between items-center gap-5 p-5">
                    <div className="lg:hidden ">
                        <img src={hamburger} alt="Hamburger" />
                    </div>
                    <div>
                        <img className="cursor-pointer" src={logo} alt="Logo" />
                    </div>

                    <nav className="hidden lg:block">
                        <ul className="flex gap-5">
                            <li onClick={()=>setActiveMenu("Home")}
                            className={activeMenu==="Home" ? "text-[#D91B7E] font-semibold cursor-pointer" : "text-gray-500 font-semibold cursor-pointer"}>Home</li>
                            <li onClick={()=>setActiveMenu("Technologies")}
                            className={activeMenu==="Technologies" ? "text-[#D91B7E] font-semibold cursor-pointer" : "text-gray-500 font-semibold cursor-pointer"}>Technologies</li>
                            <li onClick={()=>setActiveMenu("Projects")}
                            className={activeMenu==="Projects" ? "text-[#D91B7E] font-semibold cursor-pointer" : "text-gray-500 font-semibold cursor-pointer"}>Projects</li>
                            <li onClick={()=>setActiveMenu("About")}
                            className={activeMenu==="About" ? "text-[#D91B7E] font-semibold cursor-pointer" : "text-gray-500 font-semibold cursor-pointer"}>About</li>
                            <li onClick={()=>setActiveMenu("Contact")}
                            className={activeMenu==="Contact" ? "text-[#D91B7E] font-semibold cursor-pointer" : "text-gray-500 font-semibold cursor-pointer"}>Contact</li>
                        </ul>
                    </nav>

                    <div className="flex gap-5">
                        <button className="btn-ghost text-gray-500 font-semibold cursor-pointer">Sign In</button>
                        <button className="btn btn-secondary rounded-4xl px-6 py-2 text-white font-semibold cursor-pointer">Sign Up</button>
                    </div>
                </header>
            </div>
        </>
    )
}