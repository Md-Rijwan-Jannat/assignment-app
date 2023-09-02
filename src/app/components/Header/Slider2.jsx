'use client'
import { BsArrowRightShort } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from "next/link";


const Slider2 = ({ p, h2, p2, button, image1, image2, image4, image5, image6, title1, title2, title4, title5, title6, description1, description2, description4, description5, description6 }) => {
    return (
        <>
            <div className='block xl:hidden xl:w-[500px] md:w-full md:flex flex-col md:flex-row lg:flex lg:flex-row md:justify-between md:items-center xl:flex-col text-[#7B7B76] pt-[150px] pb-5'>
                <div className='text-start ml-5 md:w-1/2 '>
                    <p className='font-[1rem]'>{p}</p>
                    <h2 className="my-[20px] text-[1.875rem] font-semibold">
                        {h2}
                    </h2>
                </div>
                <div className='text-start ml-5  md:w-1/2'>
                    <p className='font-[1rem]'>{p2} </p>
                    <button type="button"
                        className="mt-[20px] border rounded-none border-black lowercase h-[50px] w-[300px] text-sm font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-white hover:bg-black  hover:text-white focus:border-black  focus:outline-none focus:ring-0 active:bg-white active:border-white active:text-white flex items-center justify-between px-5"
                        data-te-ripple-init data-te-ripple-color="light">
                        {button} <BsArrowRightShort className='text-xl'></BsArrowRightShort>
                    </button>
                </div>
            </div>
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
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}
                scrollbar={true}
                navigation={true}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper w-full flex items-center justify-center xl:mt-[100px] h-[400px] px-5 md:px-20"
            >
                <SwiperSlide>
                    <div className="hidden md:hidden lg:hidden xl:block w-full flex flex-col items-center justify-center">
                        <div className=' absolute top-0 justify-center w-full flex flex-col text-[#7B7B76]'>
                            <div className='text-start ml-5 md:w-1/2 '>
                                <p className='font-[1rem]'>{p}</p>
                                <h2 className="my-[20px] text-[1.875rem] font-semibold">
                                    {h2}
                                </h2>
                            </div>
                            <div className='text-start ml-5  md:w-1/2'>
                                <p className='font-[1rem]'>{p2} </p>
                                <button type="button"
                                    className="mt-[20px] border rounded-none border-black lowercase h-[50px] w-[300px] text-sm font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-white hover:bg-black  hover:text-white focus:border-black  focus:outline-none focus:ring-0 active:bg-white active:border-white active:text-white flex items-center justify-between px-5"
                                    data-te-ripple-init data-te-ripple-color="light">
                                    {button} <BsArrowRightShort className='text-xl'></BsArrowRightShort>
                                </button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full mb-3  flex flex-col items-center justify-center">
                        <Image
                            src={image1}
                            className="w-[300px] h-[200px]"
                            alt="Image 1"
                            width={300}
                            height={200}
                        />
                        <div className="text-center md:px-5 lg:px-20 mt-10 space-y-5 text-[10px] md:test-sm">
                            <Link className="hover:border-b border-[#7B7B76] text-sm md:text-xl" href={'#'}>{title1}</Link>
                            <p>{description1}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="w-full mb-3  flex flex-col items-center justify-center">
                        <Image
                            src={image2}
                            className="w-[300px] h-[200px]"
                            alt="Image 1"
                            width={300}
                            height={200}
                        />
                        <div className="text-center md:px-5 lg:px-20 mt-10 space-y-5 text-[10px] md:test-sm">
                            <Link className="hover:border-b border-[#7B7B76] text-sm md:text-xl" href={'#'}>{title2}</Link>
                            <p>{description2}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full mb-3  flex flex-col items-center justify-center">
                        <Image
                            src={image4}
                            className="w-[300px] h-[200px]"
                            alt="Image 1"
                            width={300}
                            height={200}
                        />
                        <div className="text-center md:px-5 lg:px-20 mt-10 space-y-5 text-[10px] md:test-sm">
                            <Link className="hover:border-b border-[#7B7B76] text-sm md:text-xl" href={'#'}>{title4}</Link>
                            <p>{description4}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full mb-3  flex flex-col items-center justify-center">
                        <Image
                            src={image5}
                            className="w-[300px] h-[200px]"
                            alt="Image 1"
                            width={300}
                            height={200}
                        />
                        <div className="text-center md:px-5 lg:px-20 mt-10 space-y-5 text-[10px] md:test-sm">
                            <Link className="hover:border-b border-[#7B7B76] text-sm md:text-xl" href={'#'}>{title5}</Link>
                            <p>{description5}</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full mb-3  flex flex-col items-center justify-center">
                        <Image
                            src={image6}
                            className="w-[300px] h-[200px]"
                            alt="Image 1"
                            width={300}
                            height={200}
                        />
                        <div className="text-center md:px-5 lg:px-20 mt-10 space-y-5 text-[10px] md:test-sm">
                            <Link className="hover:border-b border-[#7B7B76] text-sm md:text-xl" href={'#'}>{title6}</Link>
                            <p>{description6}</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider2;
