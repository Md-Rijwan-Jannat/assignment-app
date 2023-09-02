import React from 'react';
import { BsArrowRight, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { FiArrowUpRight, IconName } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='bg-black text-white p-7 md:p-10 xl:p-16 text-sm font-medium w-full'>
            <div className='block xl:hidden'>
                <div className='flex flex-col w-full mb-10'>
                    <p className='mb-5'>Subscribe to Aesop communications</p>
                    <hr className='border-white' />
                    <div className='relative'>
                        <input className='bg-black border px-3 py-1 border-white text-white focus:border-white w-full my-4' placeholder='Email Address' type="email" name="" id="" />
                        <BsArrowRight className='absolute right-3 bottom-5 text-xl'></BsArrowRight>
                    </div>
                    <div className='flex items-start gap-3'>
                        <input type="checkbox" name="" id="" />
                        <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span className='border-b border-white'>privacy policy</span>.</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-10 mb-10 w-full'>
                <div className='hidden xl:block w-2/5'>
                    <div className='flex flex-col'>
                        <div>
                            <p className='mb-5'>Subscribe to Aesop communications</p>
                            <hr className='border-white' />
                            <div className='relative'>
                                <input className='bg-black border px-3 py-1 border-white text-white focus:border-white w-full my-4' placeholder='Email Address' type="email" name="" id="" />
                                <BsArrowRight className='absolute right-3 bottom-5 text-xl'></BsArrowRight>
                            </div>
                            <div className='flex items-start gap-3'>
                                <input type="checkbox" name="" id="" />
                                <p>Subscribe to receive communications from Aesop. By subscribing, you confirm you have read and understood our <span className='border-b border-white'>privacy policy</span>.</p>
                            </div>
                        </div>
                        <div className='mt-[150px]'>
                            <p className='mb-5'>Subscribe to Aesop communications</p>
                            <hr className='border-white' />
                            <p className='mt-5'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3  gap-10 w-full'>
                    <div>
                        <p className='mb-5'>Orders and support</p>
                        <hr className='border-white' />
                        <p className='mt-5 flex items-center'>Contact us <FiArrowUpRight></FiArrowUpRight> </p>
                        <p className='mt-5 flex items-center'> FAQs <FiArrowUpRight></FiArrowUpRight> </p>
                        <p className='mt-5 flex items-center'>Shipping <FiArrowUpRight></FiArrowUpRight></p>
                        <p className='mt-5 flex items-center'>Returns <FiArrowUpRight></FiArrowUpRight></p>
                        <p className='mt-5 flex items-center'>Order history   <FiArrowUpRight></FiArrowUpRight></p>
                        <p className='mt-5 flex items-center'>Terms and conditions</p>
                    </div>
                    <div>
                        <p className='mb-5'>Services</p>
                        <hr className='border-white' />
                        <p className='mt-5 flex items-center'>Live assistance</p>
                        <p className='mt-5 flex items-center'> Corporate gifts  </p>
                        <p className='mt-5 flex items-center'>Click and Collect</p>
                        <p className='mt-5 flex items-center'>Video consultation </p>
                    </div>
                    <div>
                        <p className='mb-5'>Location preferences</p>
                        <hr className='border-white' />
                        <p className='mt-5 flex items-center'>Shipping:</p>
                        <u className='mt-5 flex items-center border-b'>Hong Kong SAR, China </u>
                        <p className='mt-5 flex items-center'>Language:</p>
                        <p className='mt-5 flex items-center'>繁體中文 </p>
                    </div>
                    <div>
                        <p className='mb-5'>Sustainability</p>
                        <hr className='border-white' />
                        <p className='mt-5 flex items-center'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more </p>
                    </div>
                    <div>
                        <p className='mb-5'>About</p>
                        <hr className='border-white' />
                        <p className='mt-5'>Our story</p>
                        <p className='mt-5'> Foundation </p>
                        <p className='mt-5'>Careers</p>
                        <p className='mt-5'>Privacy policy </p>
                        <p className='mt-5'>Accessibility</p>
                        <p className='mt-5'>Cookie Policy</p>
                    </div>
                    <div>
                        <p className='mb-5'>Orders and support</p>
                        <hr className='border-white' />
                        <p className='mt-5 flex items-center'>   Social media<FiArrowUpRight></FiArrowUpRight> </p>
                        <p className='mt-5 flex items-center'> Instagram  <FiArrowUpRight></FiArrowUpRight> </p>
                        <p className='mt-5 flex items-center'>Twitter  <FiArrowUpRight></FiArrowUpRight></p>
                        <p className='mt-5 flex items-center'>LinkedIn  <FiArrowUpRight></FiArrowUpRight></p>
                        <p className='mt-5 flex items-center'>WeChat   <FiArrowUpRight></FiArrowUpRight></p>
                        <p className='mt-5 flex items-center'>Weibo <FiArrowUpRight></FiArrowUpRight></p>
                    </div>
                </div>
            </div>
            <hr className='border-white' />
            <div className='flex items-center justify-between mt-5'>
                <p className=''> @Aesop</p>
                <div className='flex items-center gap-5'>
                    <BsInstagram></BsInstagram>
                    <BsTwitter></BsTwitter>
                    <BsLinkedin></BsLinkedin>
                    <BsYoutube></BsYoutube>
                </div>
            </div>
        </div>
    );
};

export default Footer;