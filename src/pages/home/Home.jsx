import React from 'react';
import Section1 from './section_1/Section1';
import Section2 from './section_2/Section2';
import Section3 from './section_3/Section3';
import Section4 from './section_4/Section4';
import Section6 from './section_6/Section6';

const Home = () => {
    return (
        <div className='flex flex-col w-full'>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section6 />
        </div>
    );
};

export default Home;