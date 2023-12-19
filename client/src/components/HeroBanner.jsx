import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function HeroBanner() {
    const [image, setImage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => setImage(image >= 6 ? 1 : image + 1), 10000)
        return () => clearInterval(interval)
    }, [image])
    console.log(image)
    return (
        <div className='h-[690px] relative bg-cover'>
            <div className='absolute top-0 right-0 w-[110vw] h-full transition-opacity z-0'>
                <Image alt='hero' src={`/bg-hero${image}.webp`} fill className='transition-all duration-1000' />
            </div>
            <div className='z-1 w-[650px] relative h-full flex flex-col justify-center gap-5 ml-20' style={{ border: '2px solid red' }}>
                <h1 className='text-white text-5xl leading-snug'>Find the Perfect &nbsp; <i>Freelance</i><br />service, right away</h1>
                <div className='flex justify-center'>
                    <input type='text' className='w-[450px] h-10 rounded-md rounded-r-none p-5' placeholder='Search for any service...' />
                    <div className='bg-green-500 text-'>Search</div>
                </div>
            </div>
        </div>
    )
}

export default HeroBanner;