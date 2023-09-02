import React from 'react';

const SubHeader = () => {
    return (
        <>
            <div className='bg-[#333333] text-[#FFFEF2] text-start md:text-center px-5 py-2 lg:text-sm w-full flex justify-center'>
                <p className=' hover:border-b-[#FFFEF2] hover:transition duration-[0.5s] border border-[#333333] '>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400  <span className='text-xl ml-3'>+</span></p>
                <hr />
            </div>
        </>
    );
};

export default SubHeader;