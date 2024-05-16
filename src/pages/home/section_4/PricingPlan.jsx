import React from 'react';
import { Check } from '../../../helper/svg-imports';
import { PrimaryButton, WidePrimaryButton } from '../../../components/CustomButton';

const PricingPlan = ({ title, subtitle, price, numDev, premMonth, freeMonth }) => {
    return (
        <div className='flex flex-col items-center  p-8 shadow border rounded-lg border-gray-200 [&>*:nth-child(1)]:pb-[16px] [&>*:nth-child(2)]:pb-[32px] [&>*:nth-child(3)]:pb-[34px] [&>*:nth-child(4)]:pb-[34px]'>
            <p className="w-80 text-2xl font-semibold leading-9 text-center text-gray-900">{title}</p>
            <p className="w-80 text-lg leading-relaxed text-center text-gray-500">{subtitle}</p>
            <div className="flex items-baseline">
                <p className="text-5xl font-extrabold leading-10 text-gray-900">${price}</p>
                <p className="w-16 h-full text-lg font-medium leading-relaxed text-center text-gray-500">/month</p>
            </div>
            <div className='flex flex-col gap-[20px] self-start'>
                <div className='flex gap-[9px] items-center'><Check />Individual configuration</div>
                <div className='flex gap-[9px] items-center'><Check />No setup, monthly, or hidden fees</div>
                <div className='flex gap-[9px] items-center'><Check />Team size:<b> {numDev} developer</b></div>
                <div className='flex gap-[9px] items-center'><Check />Premium support:<b> {premMonth} months</b></div>
                <div className='flex gap-[9px] items-center'><Check />Free updates: <b>{freeMonth} months</b></div>
            </div>
            <WidePrimaryButton title={'Get started'} />
        </div>
    );
};

export default PricingPlan;