'use client'
import React from 'react';
import Image from 'next/image';
import image1 from '../../../../../public/Banner_Aesop2.webp'
import image2 from '../../../../../public/Banner1.jpg'
import image3 from '../../../../../public/banner2.jpg'
import image4 from '../../../../../public/banner3.webp'
import image5 from '../../../../../public/banner4.png'
import image6 from '../../../../../public/bsnner5.jpg'
import Section2 from '../Section2';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Link from "next/link";

const StoreLocator = () => {
    return (
        <div className='lg:flex justify-between gap-10 mt-[70px] md:mt-[100px] xl:mt-[150px]'>
            <Section2
                p='Store locator'
                p2='Our consultants are available to host you in-store and provide tailored guidance on gift purchases. '
                button='Find nearby shop'
            ></Section2>
            <div className='w-full mt-[50px] lg:mt-0 pl-2 lg:ml-0 grid justify-end'>

                <Swiper
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroupSkip={1}
                    grabCursor={true}
                    keyboard={{
                        enabled: true,
                    }}
                    breakpoints={{
                        700: {
                            slidesPerView: 1,
                            slidesPerGroup: 1,
                        },
                    }}
                    scrollbar={true}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    className="mySwiper w-[400px] lg:w-[500px] xl:w-[700px]"
                >
                    <SwiperSlide >
                        <div className="w-full mb-3  flex flex-col items-center justify-center">
                            <Image
                                src={image1}
                                className="w-full h-full"
                                alt="Image 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="w-full mb-3  flex flex-col items-center justify-center">
                            <Image
                                src={image2}
                                className="w-full h-full"
                                alt="Image 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className="w-full mb-3  flex flex-col items-center justify-center">
                            <Image
                                src={image3}
                                className="w-full h-full"
                                alt="Image 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full mb-3  flex flex-col items-center justify-center">
                            <Image
                                src={image4}
                                className="w-full h-full"
                                alt="Image 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full mb-3  flex flex-col items-center justify-center">
                            <Image
                                src={image5}
                                className="w-full h-full"
                                alt="Image 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-full mb-3  flex flex-col items-center justify-center">
                            <Image
                                src={image6}
                                className="w-full h-full"
                                alt="Image 1"
                                width={300}
                                height={200}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default StoreLocator;