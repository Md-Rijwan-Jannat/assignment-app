import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Section2 = ({ p, h2, p2, button }) => {
    return (
        <div className='px-2 flex w-10/12 xl:w-1/4 ml-2 md:ml-16 mr-20'>
        <div className='text-start text-[#7B7B76]'>
            <p className='font-[1rem]'>{p}</p>
            <h2 className="my-[20px] text-[1.875rem] font-semibold">
                {h2}
            </h2>
            <p className='font-[1rem]'>{p2} </p>
            <button type="button"
                className="mt-[20px] border rounded-none border-black lowercase h-[50px] w-[300px] text-sm font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-white hover:bg-black  hover:text-white focus:border-black  focus:outline-none focus:ring-0 active:bg-white active:border-white active:text-white flex items-center justify-between px-5"
                data-te-ripple-init data-te-ripple-color="light">
                {button} <BsArrowRightShort className='text-xl'></BsArrowRightShort>
            </button>
        </div>
        </div>
    );
};

export default Section2;