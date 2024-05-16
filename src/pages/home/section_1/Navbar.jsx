import React from 'react';
import Logo from '/src/assets/logo.svg?react';
import { PrimaryButton } from '../../../components/CustomButton';
const Navbar = () => {
    return (
        <div className='flex flex-row w-full items-center justify-between text-[#111928] pt-[16px] lg:pt-[26px]'>

            <div className='flex flex-row items-center justify-center'>
                <div className='flex flex-row items-center text-[24px] font-[600] leading-[150%] gap-3'><Logo />Landwind</div>
                <div className='w-10' />
                <div className=' flex-row gap-10 *: font-medium font text-lg hidden lg:flex' >
                    <div>Company</div>
                    <div>Marketplace</div>
                    <div>Features</div>
                    <div>Team</div>
                    <div>Contact</div>
                </div>
            </div>

            <div className='flex flex-row items-center gap-4 font-[500]'>Log In<PrimaryButton title={"Get Started"} /></div>

        </div>
    );
};

export default Navbar;