import React from 'react';
import { ArrowRight, Globe, Server, ShoppingCart, Users } from '../../../helper/svg-imports';
import DetailContainer from './DetailContainer';

const Row1 = () => {
    return (
        <div className='flex px-[50px] md:px-[80px] gap-[100px] py-[50px] md:py-[116px] flex-wrap'>
            <div className="flex flex-col items-start gap-3">
                <div className="text-purple  text-lg font-medium leading-[1.125rem]">Trusted Worldwide</div>
                <div className="flex flex-col items-start gap-4 border-b-[1px] pb-[23px] border-light-gray">
                    <div className="heading lg:w-[640px] text-[#111928] text-4xl font-extrabold leading-[125%]">Trusted by over 600 million users and 10,000 teams</div>
                    <div className="lg:w-[640px] text-gray-500  text-xl font-light leading-[150%]">Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.</div>
                </div>
                <div className='flex text-purple font-medium gap-[10px] items-center'>Explore Legality guide<ArrowRight /></div>
                <div className='flex text-purple font-medium gap-[10px] items-center'>Visit the Trust Center<ArrowRight /></div>
            </div>
            <div className='flex flex-col gap-4 md:gap-[32px]'>
                <div className='flex flex-col gap-4 sm:flex-row  md:gap-[110px]'>
                    <DetailContainer icon={<Server />} title={'99.99% uptime'} text={'for Flowbite, with zero maintenance downtime'} />
                    <DetailContainer icon={<Users />} title={'600M+ Users'} text={'trusted by over 600 milion users around the world'} />
                </div>
                <div className='flex flex-col  gap-4 sm:flex-row  md:gap-[110px]'>
                    <DetailContainer icon={<ShoppingCart />} title={'Millions'} text={'of transactions per day'} />
                    <DetailContainer icon={<Globe />} title={'100+ countries'} text={'have used Flowbite to create functional websites'} />
                </div>
            </div>
        </div>
    );
};

export default Row1;