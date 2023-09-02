'use client'
import Image from 'next/image';
import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import banner from '../../../../../public/banner-20-2.jpg'
import Section from '../Section';

const Banner = () => {
    return (
        <div className="md:relative overflow-hidden">
            <Image className="w-full h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] object-cover lg:object-fill" src={banner} alt="" />
            <div className="md:absolute top-10 left-0 w-full h-full flex justify-start text-white text-center">
                <Section
                    p={'Bar Soaps'}
                    h2={'A body care classic, reimagined'}
                    p2={'Breathing new life into the humble bar soap are Nurture, Polish and Refresh—three additions to the range, each imparting a unique constellation of benefits.'}
                    button={'Discover Bar Soaps'}
                ></Section>
            </div>
        </div>
    );
};

export default Banner;

