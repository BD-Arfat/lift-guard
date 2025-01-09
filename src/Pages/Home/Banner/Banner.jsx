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
import image2 from '../../../assets/ca-image-2.jpeg'
import image3 from '../../../assets/ca-image-3.jpeg'
import image4 from '../../../assets/ca-image-4.jpeg'
import image5 from '../../../assets/ca-image-5.jpeg'

const Banner = () => {
    return (
        <div className="pt-[66px] mb-20">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='md:w-full md:h-[580px] sm:h-20' src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[580px] sm:h-20' src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[580px] sm:h-20' src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[580px] sm:h-20' src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='md:w-full md:h-[580px] sm:h-20' src={image5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
