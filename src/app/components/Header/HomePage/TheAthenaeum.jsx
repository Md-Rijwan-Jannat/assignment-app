'use client'
import React from 'react';
import Image from 'next/image';
import subBanner1 from '../../../../../public/ForHome.jpg'
import Section2 from '../Section2';

const TheAthenaeum = () => {
    return (
        <div className='lg:flex gap-10 mt-[70px] md:mt-[100px] xl:mt-[150px]'>
            <Section2
                p='The Athenaeum'
                h2='The warm-up '
                p2='In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months.'
                button='Read more'
            ></Section2>
            <div className='w-full mt-[50px] lg:mt-0  pl-2 lg:ml-0 grid justify-end'>
                <Image
                className=' lg:w-full lg:h-full'
                    src={subBanner1}
                    alt="Image 1"
                    width={600}
                    height={400}
                />
            </div>
        </div>
    );
};

export default TheAthenaeum;