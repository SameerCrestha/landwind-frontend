import React from 'react';
import imgSrc from '../../../helper/img-src';
import { CheckCircle } from '../../../helper/svg-imports';

const Row2 = () => {
    return (
        <div className='flex gap-[74px] pt-[60px] md:pt-[117px]'>
            {/*Column 1*/}
            <img src={imgSrc.feature2} className='hidden lg:block' />
            {/*Column 2*/}
            <div className="flex flex-col items-start self-stretch">
                <div className="self-stretch text-[#111928] text-4xl font-extrabold pb-[16px] leading-[125%]">
                    We invest in the world's potential
                </div>
                <div className="self-stretch text-gray-500 font-[400] text-xl leading-[150%] border-b-[1px] border-[#E5E7EB] pb-[32px]">
                    Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                    Accelerate critical development work, eliminate toil, and deploy changes with ease.
                </div>
                <div className='flex flex-col pt-[32px] gap-[16px]'>
                    <div className=" flex items-center gap-[10px] self-stretch font-medium leading-[150%]">
                        <CheckCircle />
                        Dynamic reports and dashboards
                    </div>
                    <div className=" flex items-center gap-[10px] self-stretch font-medium leading-[150%]">
                        <CheckCircle />
                        Templates for everyone
                    </div>
                    <div className=" flex items-center gap-[10px] self-stretch font-medium leading-[150%] ">
                        <CheckCircle />
                        Development workflow
                    </div>
                    <div className="flex items-center gap-[10px] self-stretch font-medium leading-[150%]">
                        <CheckCircle />
                        Limited business automation
                    </div>
                    <div className="flex items-center gap-[10px] self-stretch font-medium leading-[150%]">
                        <CheckCircle />
                        Khowledge management
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Row2;