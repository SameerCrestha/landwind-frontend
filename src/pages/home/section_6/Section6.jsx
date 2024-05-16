import React from 'react';
import { PrimaryButton } from '../../../components/CustomButton';

const Section6 = () => {
    return (
        <div className='py-[96px] flex flex-col items-center gap-[24px] bg-light-gray'>
            <p className="text-4xl font-extrabold leading-10">Start your free trial today</p>
            <p className="text-xl leading-loose">
                Try Flowbite Platform for 30 days. No credit card required.
            </p>
            <PrimaryButton title={'Free trial for 30 days'} />
        </div>
    );
};

export default Section6;