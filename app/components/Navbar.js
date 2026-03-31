import React from 'react'
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className='h-16 bg-green-400/70 flex justify-between items-center md:px-4 px-3'>
                <Link href="/">
                    <div className="hero text-emerald-950 font-medium cursor-pointer md:text-3xl text-2xl font-[silkscreen]">
                        ShortLy
                    </div>
                </Link>
                <div className="font-[montserrat] md:text-lg text-sm font-bold text-emerald-950 cursor-pointer">
                    <Link href="https://github.com/mech071/url-shortener" target="_blank">Github</Link>
                </div>
            </div>
            <div className="brk w-full h-0.5 bg-black"></div>
        </>
    )
}

export default Navbar