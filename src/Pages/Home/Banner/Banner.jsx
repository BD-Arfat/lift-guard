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
import image1 from '../../../assets/pressure-test-bg.jpg';
import image2 from '../../../assets/snapedit_1737795608765.jpg';
import image3 from '../../../assets/snapedit_1737795650141.jpg';
import image4 from '../../../assets/snapedit_1737795683318.jpg';
import image5 from '../../../assets/snapedit_1737795719917.jpg';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className=" mb-20 mx-auto  font-oswald">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper "
            >
                {/* First Slide with Welcome Text */}
                <SwiperSlide>
                    <div className="relative w-full">
                        <img
                            className="w-full h-[280px] md:h-auto max-h-screen object-cover"
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
                        className="w-full h-[280px] md:h-auto max-h-screen object-cover "
                        // src={image1}
                        src={image1}
                        alt="Slide 1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90">
                    <div className="absolute inset-0 left-[250px] md:left-[500px] md:top-[170px] top-[90px] lg:left-[630px] lg:top-[230px] flex justify-center items-center">
                        <h1 className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
                            LiftGuard Solution
                        </h1>
                    </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[280px] md:h-auto max-h-screen object-cover"
                        src={image2}
                        alt="Slide 2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90">
                    <div className="absolute inset-0 left-[250px] md:left-[500px] md:top-[170px] top-[90px] lg:left-[630px] lg:top-[230px] flex justify-center items-center">
                        <h1 className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
                            LiftGuard Solution
                        </h1>
                    </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[280px] md:h-auto max-h-screen object-cover"
                        src={image3}
                        alt="Slide 3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90">
                    <div className="absolute inset-0 left-[250px] md:left-[500px] md:top-[200px] top-[90px] lg:left-[630px] lg:top-[270px] flex justify-center items-center">
                        <h1 className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
                            LiftGuard Solution
                        </h1>
                    </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[280px] md:h-auto max-h-screen object-cover"
                        src={image4}
                        alt="Slide 4"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90">
                    <div className="absolute inset-0 left-[250px] md:left-[500px] md:top-[200px] top-[90px] lg:left-[630px] lg:top-[270px] flex justify-center items-center">
                        <h1 className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
                            LiftGuard Solution
                        </h1>
                    </div></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full h-[280px] md:h-auto max-h-screen object-cover"
                        src={image5}
                        alt="Slide 5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/90">
                    <div className="absolute inset-0 left-[250px] md:left-[500px] md:top-[170px] top-[90px] lg:left-[630px] lg:top-[230px] flex justify-center items-center">
                        <h1 className="text-white text-lg md:text-3xl lg:text-4xl font-bold">
                            LiftGuard Solution
                        </h1>
                    </div></div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
