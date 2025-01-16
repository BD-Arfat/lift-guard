import React from 'react';
import { Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
// import { Navigation } from 'swiper';

import image6 from '../../../assets/wel-4.jpg';
import image1 from '../../../assets/m-1.jpg';
import image2 from '../../../assets/ca-image-2.jpeg';
import image3 from '../../../assets/ca-image-3.jpeg';
import image4 from '../../../assets/ca-image-4.jpeg';
import image5 from '../../../assets/ca-image-5.jpeg';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="pt-[66px] mb-20 mx-auto font-oswald">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper "
            >
                {/* First Slide with Welcome Text */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            className="w-full h-auto max-h-[580px] object-cover"
                            src={image6}
                            alt="Welcome Slide"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b md:-mt-12 from-black/50 via-black/60 to-black/90 flex flex-col justify-center items-center text-white">
                            <h1 className="text-xl w-5/6 md:text-[50px] lg:w-11/12 mx-auto text-center lg:text-[60px] font-extrabold mb-4 uppercase leading-tight">
                                <TypeAnimation
                                    sequence={[
                                        // Same substring at the start will only be typed out once, initially
                                        'Welcome To Our LiftGuard Solution',
                                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                                        'Welcome',
                                        1000,
                                        'To Our',
                                        1000,
                                        'LiftGuard ',
                                        1000,
                                        'Solution',
                                        1000
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    style={{ fontSize: 'lg:[60px]', display: 'inline-block' }}
                                    repeat={Infinity}
                                    clearCursor={true}
                                />
                            </h1>
                            <p className="text-sm md:text-lg w-5/6 md:w-2/4 mt-3 mx-auto text-center leading-relaxed">
                                Your trusted partner for innovative safety solutions in lifting gear and heavy equipment. We prioritize accident prevention and workplace safety, offering reliable services to secure industrial operations.
                            </p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Other Slides */}
                <SwiperSlide>
                    <img
                        className="w-full h-auto max-h-[380px] object-cover "
                        src={image1}
                        alt="Slide 1"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-auto max-h-[580px] object-cover"
                        src={image2}
                        alt="Slide 2"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-auto max-h-[580px] object-cover"
                        src={image3}
                        alt="Slide 3"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-auto max-h-[580px] object-cover"
                        src={image4}
                        alt="Slide 4"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-auto max-h-[580px] object-cover"
                        src={image5}
                        alt="Slide 5"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
