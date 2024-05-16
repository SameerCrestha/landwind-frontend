import React from 'react';
import { CheckCircle } from '../../../helper/svg-imports';
import Row1 from './Row1';
import Row2 from './Row2';

const Section2 = () => {
    return (
        <div className='w-full flex flex-col justify-start  bg-light-gray px-[40px] md:px-[80px] py-[50px] md:pt-[121px] md:pb-[106px]'>
            <Row1 />
            <Row2 />
        </div>
    );
};

export default Section2;