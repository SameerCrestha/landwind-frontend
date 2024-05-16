import React from 'react';
import Navbar from './Navbar';
import { TargetPic, } from '/src/helper/svg-imports.js';
import { PrimaryButton, SecondaryButton } from '../../../components/CustomButton';
import { Airbnb, Google, MailChimp, Microsoft, Spotify, Uber } from '../../../helper/svg-imports';

const Section1 = () => {
    return (
        <div className='w-full flex flex-col justify-start lg:h-screen px-[40px] lg:px-[80px]'>
            <Navbar />
            <div className='flex flex-row  items-center justify-between py-[32px] lg:py-[64px]'>
                <div className="flex flex-col justify-center items-start lg:pr-20">
                    <div className="self-stretch text-[#111928] text-4xl lg:text-6xl font-black lg:leading-[60px] lg:w-[600px] pb-4">
                        Building digital products &amp; brands.
                    </div>
                    <div className="self-stretch text-gray-500  text-xl font-[400] leading-[150%] lg:w-[600px] pb-4">
                        Here at flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.
                    </div>
                    <div className='flex flex-row gap-4'>
                        <PrimaryButton title={'Start 30 day free trial'} />
                        <SecondaryButton title={'Pricing & FAQ'} />
                    </div>
                </div>
                <TargetPic className="hidden lg:block" />
            </div>
            <div className='flex w-auto justify-between items-center flex-wrap gap-8 lg:gap-0'>
                <Google /><Microsoft /><Spotify /><MailChimp /><Airbnb /><Uber />
            </div>
        </div>
    );
};

export default Section1;