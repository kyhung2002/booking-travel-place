import FAQ from 'components/FAQ';
import Heading from 'modules/common/Heading';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="w-full mt-auto bg-opacity-90 bg-primary ">
            <div className="container grid md:grid-cols-2 gap-y-10 md:gap-x-10">
                <FAQ></FAQ>
                <div className="grid grid-cols-1 text-white gap-y-4 lg:grid-cols-3 lg:gap-x-2">

                    <ul className="flex flex-col text-sm gap-y-4">
                        <Heading className='text-base md:text-lg'>About</Heading>
                        <Link>Accessibility Statement</Link>
                        <Link>Resources and Policies</Link>
                        <Link>Investor Relations</Link>
                    </ul>
                    <ul className='flex flex-col text-sm gap-y-4'>
                        <Heading className='text-base md:text-lg'>Explore</Heading>
                        <Link>Help Center</Link>
                        <Link>Travel Articles</Link>
                        <Link>Write a review</Link>
                    </ul>
                    <ul className='flex flex-col text-sm gap-y-4'>
                        <Heading className='text-base md:text-lg'>Do Business With Us</Heading>
                        <Link>Owners</Link>
                        <Link>Business Advantage</Link>
                        <Link>Sponsored Placements</Link>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;