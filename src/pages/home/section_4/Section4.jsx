import React, { useEffect } from 'react';
import PricingPlan from './PricingPlan';
import {
    useQuery,
} from '@tanstack/react-query'
import { Breathing, Shimmer } from 'react-shimmer';
const Section4 = () => {
    const baseUrl = import.meta.env.VITE_BASE_URL;
    const packagesEndpoint = import.meta.env.VITE_PACKAGES_ENDPOINT;
    const fetchPackages = async () => {
        const simulationDelay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1 and 3 seconds

        try {
            const response = await new Promise((resolve, reject) => {
                setTimeout(() => {
                    fetch(`${baseUrl}${packagesEndpoint}`)
                        .then(res => resolve(res))
                        .catch(error => reject(error));
                }, simulationDelay);
            });

            if (!response.ok) {
                throw new Error('Failed to fetch packages');
            }

            return response.json();
        } catch (error) {
            console.error('Error fetching packages:', error);
            throw error; // Re-throw for handling in the calling component (optional)
        }
    };

    const { isPending, isError, data, error } = useQuery({
        queryKey: ['packages'],
        queryFn: fetchPackages,

    })

    function showInt(number) {
        number = parseFloat(number)
        return (number % 1 === 0) ? number.toString() : number;
    }

    return (
        <div className='lg:px-[80px] px-[50px] py-[96px] flex flex-col items-center [&>*:nth-child(1)]:pb-[16px] [&>*:nth-child(2)]:pb-[48px]'>
            <div className="text-4xl font-extrabold leading-10">Pay as you grow</div>
            <div className="text-xl leading-loose text-center lg:w-[768px] text-gray-500">
                Here at flowbite we focus on markets where technology, innovation,
                and capital can unlock long-term value and drive economic growth.
            </div>
            {isPending ? (
                <Shimmer // Use Shimmer for visual loading feedback
                    width="100%"
                    height={600} // Adjust height as needed
                />
            ) : isError ? (
                <span>Error: {error.message}</span>
            ) : (
                <div className="flex flex-col gap-[20px] lg:flex-row lg:gap-[40px]">
                    {data.map((packageData) => (
                        <PricingPlan
                            key={packageData.id}
                            title={packageData.title}
                            subtitle={packageData.desc}
                            price={showInt(packageData.price)} // Ensure two decimal places
                            numDev={packageData.num_dev}
                            premMonth={packageData.prem_support_months}
                            freeMonth={packageData.free_updates_months}
                        />
                    ))}
                </div>
            )}

        </div>
    );
};

export default Section4;