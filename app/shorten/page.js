"use client"
import Link from 'next/link'
import React, { useState } from 'react'
const page = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState("")
    const generate = async () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

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
            .then((response) => response.json())
            .then((result) => { seturl(""); setshorturl(""); setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`); console.log(result) })
            .catch((error) => console.error(error));

    }
    return (
        <div className="min-h-[calc(100vh-64px)] bg-green-100 flex flex-col gap-8 items-center justify-start font-[silkscreen]">
            <div className="headedr mt-20 text-3xl text-emerald-950">
                Generate Your Short URLs
            </div>
            <div className="container bg-green-200 p-10 w-200 flex flex-col gap-5 rounded-lg">
                <input type="text" placeholder='Enter your URL' value={url} onChange={e => { seturl(e.target.value) }} className='bg-white font-medium text-emerald-950 rounded-lg p-2' />
                <input type="text" placeholder='Enter your preferred URL text' value={shorturl} onChange={e => { setshorturl(e.target.value) }} className='bg-white font-medium text-emerald-950 rounded-lg p-2' />
                <button onClick={generate} className="bg-emerald-800 text-white rounded-lg px-8 py-3 font-[silkscreen] cursor-pointer hover:bg-emerald-700 mt-2 flex justify-center">
                    Generate
                </button>
                {generated &&
                    <>
                        <span className='text-emerald-950'>Your Link - </span><code><Link className='text-emerald-950 hover:text-emerald-600' href={generated} target='_blank'>{generated}</Link>
                        </code></>}
            </div>
        </div >
    )
}

export default page
