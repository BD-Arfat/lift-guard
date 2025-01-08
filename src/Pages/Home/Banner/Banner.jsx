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
        <div className="pt-[66px] mb-20">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='md:w-full md:h-[500px] sm:h-20' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[500px] sm:h-20' src='http://krsteelstructure.com/wp-content/uploads/2020/11/KR-Steel-Structure-Ltd-Slider-2.jpg' alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[500px] sm:h-20' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[500px] sm:h-20' src={image1} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
