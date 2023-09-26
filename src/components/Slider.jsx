import React from 'react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Slider = () => {
    return (
        <>
            <Swiper className='py-10'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop={true}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                pagination={{ clickable: true }} // Add this line to enable clickable pagination
            >
                <p className="slide-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                        <circle cx="30.1698" cy="30.17" r="30" transform="rotate(30 30.1698 30.17)" fill="url(#paint0_linear_1_189)" />
                        <defs>
                            <linearGradient id="paint0_linear_1_189" x1="30.1698" y1="0.169971" x2="30.1698" y2="60.17" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4361EE" />
                                <stop offset="1" stop-color="#4361EE" stop-opacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </p>
                <SwiperSlide>
                    <img  src="/slider.png" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/slider.png" alt="" />
                </SwiperSlide>
                {/* ... Add more slides if needed */}
            </Swiper>
        </>
    )
}

export default Slider