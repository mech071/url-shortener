"use client"
import Link from 'next/link'
import React, { useState } from 'react'
const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const [error, seterror] = useState("")
    const [loading, setloading] = useState(false);
    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        setloading(true)
        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then(async (response) => {
                const result = await response.json();
                if (result.message==="URL already exists") {
                    setgenerated("");
                    seterror(result.message);
                    setloading(false);
                    return;
                }
                seterror("");
                seturl("");
                setshorturl("");
                setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                setloading(false);
            })
            .catch((error) => {
                seterror("Server error");
            });
    }
    return (
        <div className="min-h-[calc(100vh-64px)] bg-green-100 flex flex-col gap-6 md:gap-8 items-center justify-start font-[silkscreen]">
            <div className="headedr mt-16 md:mt-20 text-xl md:text-3xl text-emerald-950">
                Generate Your Short URLs
            </div>
            <div className="container bg-green-200 p-6 md:p-10 w-90 md:w-200 flex flex-col gap-5 rounded-lg">
                <input type="text" placeholder='Enter your URL' value={url} onChange={e => { seturl(e.target.value) }} className='bg-white font-medium text-emerald-950 rounded-lg p-2 focus:outline-emerald-900'/>
                <input type="text" placeholder='Enter your preferred URL text' value={shorturl} onChange={e => { setshorturl(e.target.value) }} className='bg-white font-medium text-emerald-950 rounded-lg p-2 focus:outline-emerald-900'/>
                <button disabled={loading} onClick={generate} className="bg-emerald-800 text-white rounded-lg px-8 py-3 font-[silkscreen] cursor-pointer hover:bg-emerald-700 mt-2 flex justify-center">
                    {loading ? "Generating..." : "Generate"}
                </button>
                {generated &&
                    <>
                    
                        <span className='text-emerald-950'>Your Link - </span><code><Link className='text-emerald-950 hover:text-emerald-600' href={generated} target='_blank'>{generated}</Link>
                        </code></>}
                {error && <span className="text-red-600">{error}</span>}
            </div>
        </div >
    )
}

export default page
