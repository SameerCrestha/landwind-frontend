import React from 'react';

const hoverEffectPrimary = `
transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-emerald-500 duration-300 
`;
const hoverEffectSecondary = `
transition ease-in-out delay-150  hover:bg-light-gray duration-300 
`;

const baseButtonStyle = `
  flex justify-center items-center py-[12px] px-[20px] rounded-lg font-medium leading-[150%]
`;

const PrimaryButton = ({ title }) => (
    <button
        className={`${baseButtonStyle} bg-[#7e3af2] text-white ${hoverEffectPrimary}`}
        type="button" // Ensures default button behavior
    >
        {title}
    </button>
);

const WidePrimaryButton = ({ title }) => (
    <button
        className={`${baseButtonStyle} w-[336px] bg-[#7e3af2] text-white ${hoverEffectPrimary}`}
        type="button"
    >
        {title}
    </button>
);

const SecondaryButton = ({ title }) => (
    <button
        className={`${baseButtonStyle} border border-gray-200 text-[#1f2a37] ${hoverEffectSecondary}`}
        type="button"
    >
        {title}
    </button>
);

export { PrimaryButton, SecondaryButton, WidePrimaryButton };
