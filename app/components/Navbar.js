import React from 'react'
import Link from "next/link";
const Navbar = () => {
    return (
        <>
            <div className='h-16 bg-green-400/70 flex justify-between items-center px-4'>
                <Link href="/">
                    <div className="hero text-emerald-950 font-medium cursor-pointer text-3xl font-[silkscreen]">ShortIt</div></Link>
                <div className="font-[montserrat] text-lg font-bold text-emerald-950 cursor-pointer">Github</div>
            </div>
            <div className="brk w-full h-0.5 bg-black"></div>
        </>
    )
}

export default Navbar
