import React from 'react'
import Marquee from "react-fast-marquee";
const Marqueecom = () => {
    return (
        <div className='pb-20'>
            <h1 className="marq-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="101" viewBox="0 0 101 101" fill="none">
                    <circle opacity="0.5" cx="50.3013" cy="50.3013" r="50" transform="rotate(-30 50.3013 50.3013)" fill="url(#paint0_linear_1_491)" />
                    <defs>
                        <linearGradient id="paint0_linear_1_491" x1="50.3013" y1="0.30127" x2="50.3013" y2="100.301" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#4361EE" />
                            <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </h1>
            <h1 style={{color:"#808080"}} className='text-center text-base font-medium mb-4 pt-14'>Trusted by 100+ Companies across the globe</h1>

            <div className="container mx-auto px-6 py-6">
                <div className="flex justify-center">
                    <div className="" style={{ width: '90%' }}>
                        <Marquee >
                            <img className='mx-4 lg:mx-16' src="/google.png" alt="" />
                            <img className='mx-4 lg:mx-16' src="/amazon.png" alt="" />
                            <img className='mx-4 lg:mx-16' src="/log.png" alt="" />
                            <img className='mx-4 lg:mx-16' src="/spotify.png" alt="" />
                            <img className='mx-4 lg:mx-16' src="/samsung.png" alt="" />
                            <img className='mx-4 lg:mx-16' src="/netflix.png" alt="" />

                        </Marquee>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Marqueecom