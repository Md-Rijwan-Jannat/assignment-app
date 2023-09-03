'use client'
import React, { useState } from 'react'

const SubHeader = () => {
    // State to manage drawer visibility
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    // Function to toggle drawer visibility
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return (
        <>
            <div onClick={toggleDrawer}
                aria-controls="drawer-example"
                aria-expanded={isDrawerOpen}
                className='bg-[#333333] text-[#FFFEF2]  text-start md:text-center px-5 py-2 lg:text-sm w-full flex justify-center'>
                <p className=' hover:border-b-[#FFFEF2] hover:transition duration-[0.5s] border border-[#333333] '>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400  <span className='text-xl ml-3'>+</span></p>
                <hr />
            </div>
            <div
                id="drawer-example"
                className={`fixed top-0 left-0 z-40 h-screen w-full md:w-1/2 p-4 overflow-y-auto transition-transform ${isDrawerOpen ? 'transition-all ease-in-out duration-700' : '-translate-x-full transition-all ease-in duration-400'
                    } bg-[#F1F0E8] w-80 dark:bg-gray-800`}
                tabIndex="-1"
                aria-labelledby="drawer-label"
            >
                <button
                    type="button"
                    onClick={toggleDrawer}
                    aria-controls="drawer-example"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 right-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white "
                >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>

                <div className='mt-10 md:mt-[100px] md:mx-[20px] lg:mx-[70px]'>
                    <div>
                        <p className='mb-8 font-medium text-black text-sm'>Shipping fees and delivery times</p>
                        <hr className='border-[#6d6a6a] ' />
                        <p className='font-medium my-6 text-black text-sm'>SF Express (Hong Kong SAR, China)</p>
                        <div className='flex items-center justify-between text-[#666666] text-sm'>
                            <div className='flex flex-col gap-5'>
                                <p>Orders below $400</p>
                                <p>Orders $400 and over</p>
                                <p>Urban areas</p>
                                <p>Outlying Islands</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p>$40</p>
                                <p>Complimentary</p>
                                <p>2-3 business days</p>
                                <p>3-5 business days</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <hr className='border-[#6d6a6a] ' />
                        <p className='font-medium my-6 text-black text-sm'>SF Express (Hong Kong SAR, China)</p>
                        <div className='flex items-center justify-between text-[#666666] text-sm'>
                            <div className='flex flex-col gap-5'>
                                <p>Orders below $400</p>
                                <p>Orders $400 and over</p>
                                <p>Urban areas</p>
                                <p>Outlying Islands</p>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <p>$40</p>
                                <p>Complimentary</p>
                                <p>2-3 business days</p>
                                <p>3-5 business days</p>
                            </div>
                        </div>
                        <p className='my-5  text-[#666666] text-sm'>Regrettably we are unable to accept orders containing Dangerous Goods to Macau SAR, China.</p>
                    </div>
                    <div className='mt-5'>
                        <hr className='border-[#6d6a6a] ' />
                        <p className='font-medium my-6 text-black text-sm'>Complimentary samples</p>
                        <p className='my-5  text-[#666666] text-sm'>All online orders include complimentary samples. At checkout, select from the available bundles to add them to your order.</p>
                    </div>
                    <div className='mt-5'>
                        <hr className='border-[#6d6a6a] ' />
                        <p className='font-medium my-6 text-black text-sm'>Click and Collect</p>
                        <p className='text-[#666666] text-sm'>Simply choose in-store collection at checkout, then pick up your order at your preferred location.</p>
                        <p className='my-5 text-[#666666] text-sm'>For general enquiries regarding Click and Collect, we welcome you to phone us on +852 3001 6734 instead of contacting your local store.</p>
                    </div>
                    <div className='mt-5'>
                        <hr className='border-[#6d6a6a] ' />
                        <p className='font-medium my-6 text-black text-sm'>Returns</p>
                        <p className='my-5 text-[#666666] text-sm'>Online purchases may be returned to us or any Aesop Stores within 30 days.</p>
                    </div>
                    <div className='mt-5'>
                        <hr className='border-[#6d6a6a] ' />
                        <p className='font-medium my-6 text-black text-sm'>Carbon neutral shipping</p>
                        <p className='my-5 text-[#666666] text-sm'>We offset operational emissions to ensure the delivery of every order is carbon neutral.</p>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SubHeader;
