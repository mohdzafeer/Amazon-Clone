import Image from "next/image"
import logo from '../images/Logo.png'
import Link from "next/link"
export default function Footer (){
    return (
        <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4 ">
            <Link href='/'><Image className="w-20 mt-4" src={logo} alt="logo"/></Link>
            <p className="text-sm ">All rights Reserved <span onClick={()=>window.open('https://portfolio-nine-rust-42.vercel.app/')} className="hover:text-white duration-300 cursor-pointer hover:underline sm:text-xs">@mohammadzafeer</span></p>
        </div>
    )
}