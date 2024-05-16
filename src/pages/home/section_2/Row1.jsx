import React from 'react';
import { CheckCircle } from '../../../helper/svg-imports';
import imgSrc from '../../../helper/img-src';

const Row1 = () => {
    return (
        <div className='flex gap-[74px]'>
            {/*Column 1*/}
            <div className="flex flex-col items-start  self-stretch w-[608px]">
                <div className="heading self-stretch text-[#111928] text-4xl font-extrabold pb-[16px] leading-[125%]">
                    Work with tools you already use
                </div>
                <div className="self-stretch text-gray-500 text-xl leading-[150%] border-b-[1px] border-[#E5E7EB] pb-[32px]">
                    Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                    Accelerate critical development work, eliminate toil, and deploy changes with ease.
                </div>
                <div className='pt-[32px] flex flex-col gap-[16px] '>
                    <div className=" flex items-center gap-[10px] self-stretch font-medium leading-[150%]">
                        <CheckCircle />
                        Continuous integration and deployment
                    </div>
                    <div className=" flex items-center gap-[10px] self-stretch font-medium leading-[150%]">
                        <CheckCircle />
                        Development workflow
                    </div>
                    <div className=" flex items-center gap-[10px] self-stretch font-medium leading-[150%] ">
                        <CheckCircle />
                        Knowledge management
                    </div>
                    <div className="self-stretch gap text-gray-500 text-xl pt-[8px] leading-[150%]">
                        Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                    </div>
                </div>
            </div>
            {/*Column 2*/}
            <img src={imgSrc.feature1} className='hidden lg:block' />
        </div>
    );
};

export default Row1;