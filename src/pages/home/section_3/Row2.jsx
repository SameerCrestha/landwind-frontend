import React from 'react';
import { DoubleQuote } from '../../../helper/svg-imports';
import imgSrc from '../../../helper/img-src';

const Row2 = () => {
    return (
        <div className='flex flex-col bg-light-gray items-center gap-[24px] py-[50px] md:py-[96px] px-[80px]'>
            <DoubleQuote />
            <p className="text-2xl font-semibold leading-10 text-center lg:w-[768px]">
                "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard.
                Perfect choice for your next SaaS application."</p>
            <div className='flex items-center '>
                <img src={imgSrc.avatar} className='pr-[14px] h-[24px]' />
                <div className='flex gap-2 items-center'>
                    <div className="font-semibold leading-tight">Micheal Gough</div>
                    <div>/</div>
                    <div className="text-sm leading-none text-gray-500">CEO at Google</div>
                </div>
            </div>
        </div>
    );
};

export default Row2;