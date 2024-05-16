import React from 'react';

const DetailContainer = ({ icon, title, text }) => {
    return (
        <div className='flex flex-col items-start'>
            {icon}
            <div className='text-2xl font-bold'>{title}</div>
            <div className='text-gray-500 w-[190px]'>{text}</div>
        </div>
    );
};

export default DetailContainer;