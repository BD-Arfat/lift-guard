import React from 'react';
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
// import { Navigation } from 'swiper';

import image1 from '../../../assets/ca-image-1.jpeg'

const Banner = () => {
    return (
        <div className="pt-20 mb-20">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[500px]' src={image1} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
