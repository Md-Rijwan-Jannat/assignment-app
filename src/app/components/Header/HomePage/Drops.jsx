'use client'
import React from 'react';
import Image from 'next/image';
import subBanner3 from '../../../../../public/Banner_Aesop2.webp'
import subBanner2 from '../../../../../public/home3-removebg-preview.png'
import { BsArrowRightShort } from 'react-icons/bs';

const Drops = () => {
    return (
        <div className='lg:flex lg:gap-10 mt-[70px] md:mt-[100px] xl:mt-[150px]'>
            <div className='mt-[50px] lg:mt-0 relative grid justify-start w-full'>
                <Image
                    className='lg:w-full lg:h-full'
                    src={subBanner3}
                    alt="Image 1"
                    width={600}
                    height={400}
                />
                <Image
                    className='absolute md:right-[190px] lg:right-[110px] -bottom-10 w-[100px] md:w-[150px] xl:w-[200px]'
                    src={subBanner2}
                    alt="Image 1"
                    width={800}
                    height={400}
                />
            </div>
            <div className='px-2 flex w-10/12 xl:w-1/4 ml-2 md:mr-16 mt-10'>
                <div className='text-start text-[#7B7B76]'>
                    <p className='font-[1rem]'> Post-Poo Drops has returned</p>
                    <h2 className="my-[20px] text-[1.875rem] font-semibold">
                        Find nearby shop
                    </h2>
                    <p className='font-[1rem]'>Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after flushing to effectively mask disagreeable odours. </p>
                    <button type="button"
                        className="mt-[20px] border rounded-none border-black lowercase h-[50px] w-[300px] text-sm font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-white hover:bg-black  hover:text-white focus:border-black  focus:outline-none focus:ring-0 active:bg-white active:border-white active:text-white flex items-center justify-between px-5"
                        data-te-ripple-init data-te-ripple-color="light">
                        Discover Post-Poo Drops <BsArrowRightShort className='text-xl'></BsArrowRightShort>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drops;