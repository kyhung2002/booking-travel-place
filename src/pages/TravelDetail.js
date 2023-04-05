import Gap from 'components/Gap';
import QuantityInput from 'components/QuantityInput';
import { Button } from 'components/button';
import Field from 'components/field';
import Input from 'components/input';
import { Label } from 'components/label';
import BookingAuthor from 'modules/booking/BookingAuthor';
import BookingDesc from 'modules/booking/BookingDesc';
import BookingImage from 'modules/booking/BookingImage';
import ClientLayout from 'modules/client/ClientLayout';
import Heading from 'modules/common/Heading';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const TravelDetail = ({ title = "" }) => {
    const serviceBlock = [{
        name: "Kitchen",
        icon: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" fill="currentColor" className='w-6 h-6'><path d="M26 1a5 5 0 0 1 5 5c0 6.389-1.592 13.187-4 14.693V31h-2V20.694c-2.364-1.478-3.942-8.062-3.998-14.349L21 6l.005-.217A5 5 0 0 1 26 1zm-9 0v18.118c2.317.557 4 3.01 4 5.882 0 3.27-2.183 6-5 6s-5-2.73-5-6c0-2.872 1.683-5.326 4-5.882V1zM2 1h1c4.47 0 6.934 6.365 6.999 18.505L10 21H3.999L4 31H2zm14 20c-1.602 0-3 1.748-3 4s1.398 4 3 4 3-1.748 3-4-1.398-4-3-4zM4 3.239V19h3.995l-.017-.964-.027-.949C7.673 9.157 6.235 4.623 4.224 3.364l-.12-.07zm19.005 2.585L23 6l.002.31c.045 4.321 1.031 9.133 1.999 11.39V3.17a3.002 3.002 0 0 0-1.996 2.654zm3.996-2.653v14.526C27.99 15.387 29 10.4 29 6a3.001 3.001 0 0 0-2-2.829z"></path></svg>
    }, {
        name: "Wifi",
        icon: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" fill="currentColor" className='w-6 h-6'><path d="m15.9999 20.33323c2.0250459 0 3.66667 1.6416241 3.66667 3.66667s-1.6416241 3.66667-3.66667 3.66667-3.66667-1.6416241-3.66667-3.66667 1.6416241-3.66667 3.66667-3.66667zm0 2c-.9204764 0-1.66667.7461936-1.66667 1.66667s.7461936 1.66667 1.66667 1.66667 1.66667-.7461936 1.66667-1.66667-.7461936-1.66667-1.66667-1.66667zm.0001-7.33323c3.5168171 0 6.5625093 2.0171251 8.0432368 4.9575354l-1.5143264 1.5127043c-1.0142061-2.615688-3.5549814-4.4702397-6.5289104-4.4702397s-5.5147043 1.8545517-6.52891042 4.4702397l-1.51382132-1.5137072c1.48091492-2.939866 4.52631444-4.9565325 8.04273174-4.9565325zm.0001-5.3332c4.9804693 0 9.3676401 2.540213 11.9365919 6.3957185l-1.4470949 1.4473863c-2.1746764-3.5072732-6.0593053-5.8431048-10.489497-5.8431048s-8.31482064 2.3358316-10.48949703 5.8431048l-1.44709488-1.4473863c2.56895177-3.8555055 6.95612261-6.3957185 11.93659191-6.3957185zm-.0002-5.3336c6.4510616 0 12.1766693 3.10603731 15.7629187 7.9042075l-1.4304978 1.4309874c-3.2086497-4.44342277-8.4328305-7.3351949-14.3324209-7.3351949-5.8991465 0-11.12298511 2.89133703-14.33169668 7.334192l-1.43047422-1.4309849c3.58629751-4.79760153 9.31155768-7.9032071 15.7621709-7.9032071z"></path></svg>
    },
    {
        name: "Free parking on premises",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" fill="currentColor" className="w-6 h-6"><path d="M26 19a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 18a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm20.693-5l.42 1.119C29.253 15.036 30 16.426 30 18v9c0 1.103-.897 2-2 2h-2c-1.103 0-2-.897-2-2v-2H8v2c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2v-9c0-1.575.746-2.965 1.888-3.882L4.308 13H2v-2h3v.152l1.82-4.854A2.009 2.009 0 0 1 8.693 5h14.614c.829 0 1.58.521 1.873 1.297L27 11.151V11h3v2h-2.307zM6 25H4v2h2v-2zm22 0h-2v2h2v-2zm0-2v-5c0-1.654-1.346-3-3-3H7c-1.654 0-3 1.346-3 3v5h24zm-3-10h.557l-2.25-6H8.693l-2.25 6H25zm-15 7h12v-2H10v2z"></path></svg>
    },
    {
        name: "HDTV with Netflix",
        icon: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" className="w-6 h-6" fill="currentColor"><path d="M9 29v-2h2v-2H6a5 5 0 0 1-4.995-4.783L1 20V8a5 5 0 0 1 4.783-4.995L6 3h20a5 5 0 0 1 4.995 4.783L31 8v12a5 5 0 0 1-4.783 4.995L26 25h-5v2h2v2zm10-4h-6v2h6zm7-20H6a3 3 0 0 0-2.995 2.824L3 8v12a3 3 0 0 0 2.824 2.995L6 23h20a3 3 0 0 0 2.995-2.824L29 20V8a3 3 0 0 0-2.824-2.995z"></path></svg>
    },
    {
        name: "Window AC unit",
        icon: <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" fill="currentColor" className="w-6 h-6"><path d="M17 1v4.03l4.026-2.324 1 1.732L17 7.339v6.928l6-3.464V5h2v4.648l3.49-2.014 1 1.732L26 11.381l4.026 2.325-1 1.732L24 12.535l-6 3.464 6 3.465 5.026-2.902 1 1.732L26 20.618l3.49 2.016-1 1.732L25 22.351V27h-2v-5.804l-6-3.465v6.929l5.026 2.902-1 1.732L17 26.97V31h-2v-4.031l-4.026 2.325-1-1.732L15 24.66v-6.929l-6 3.464V27H7v-4.65l-3.49 2.016-1-1.732 3.489-2.016-4.025-2.324 1-1.732 5.025 2.901 6-3.464-6-3.464-5.025 2.903-1-1.732L6 11.38 2.51 9.366l1-1.732L7 9.648V5h2v5.803l6 3.464V7.339L9.974 4.438l1-1.732L15 5.03V1z"></path></svg>
    }
    ]
    const { control } = useForm({})
    const [value, setValue] = useState({ adult: 1, children: 1 });

    return (
        <ClientLayout>
            {/* Title */}
            <h1 className="text-3xl font-bold capitalize sm:text-5xl"><span className="text-[#ff5d5d]">Explore</span> Riviera Maya</h1>
            {/* Image */}
            <Gap></Gap>
            <div className="grid grid-cols-1 sm:grid-cols-[1.5fr,1fr] grid-rows-[600px]">
                <div className="w-full h-full overflow-hidden ">
                    <img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=1200" alt="" className='object-cover w-full h-full transition-all duration-300 cursor-pointer hover:scale-125 ' />
                </div>
                <div className="justify-center hidden w-full col-start-2 col-end-3 sm:items-center sm:flex-col sm:flex">
                    <div className='flex-1 w-full h-full overflow-hidden'>
                        <img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=1200" className="object-cover w-full h-full max-w-full transition-all duration-300 cursor-pointer hover:scale-125" alt="" />
                    </div>
                    <div className='flex-1 w-full h-full overflow-hidden'>
                        <img src="https://a0.muscache.com/im/pictures/d0e3bb05-a96a-45cf-af92-980269168096.jpg?im_w=1200" className="object-cover w-full h-full max-w-full transition-all duration-300 cursor-pointer hover:scale-125" alt="" />
                    </div>
                </div>
            </div>
            {/* main title */}
            <Gap></Gap>
            <div className="grid gap-y-4 grid-cols-1 md:grid-cols-[1.5fr,1fr] md:gap-x-10">
                <div className="">
                    <div className="flex items-start justify-between py-4 border-b-2">
                        <div className="flex flex-col justify-center flex-1">
                            <Heading className='mb-2 md:text-2xl lg:text-4xl'>Entire cottage hosted by Sungwon</Heading>
                            <BookingDesc className='md:text-lg lg:text-xl'>2 guests <strong> º </strong>1 bedroom <strong> º </strong>1 bath</BookingDesc>
                        </div>
                        <img className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-full cursor-pointer" alt="author" src="https://source.unsplash.com/random" />
                    </div>
                    <Gap></Gap>
                    <Heading className='mb-4' line={false}>Where you'll sleep</Heading>
                    <img src="https://source.unsplash.com/random" alt="" class="md:w-[300px] h-[300px] md:h-[200px] w-full object-cover rounded-lg" />
                    <Heading className='mt-3 text-base' line={false}>Bedroom</Heading>
                    <BookingDesc>1 double bed</BookingDesc>
                    <Gap></Gap>
                    <div className="py-4 border-t-2">
                        <Heading line={false} className="mb-4">What this place offers</Heading>
                        <div className="flex flex-wrap items-center justify-between gap-y-4">
                            {serviceBlock.map((item) => (<div className="flex items-center w-2/4 gap-x-2" key={item.icon}>
                                <span className="text-text2">{item.icon}</span>
                                <span className='font-semibold'>{item.name}</span>
                            </div>))}
                        </div>
                    </div>
                </div>
                <div className="w-full px-5 py-6 border shadow-xl rounded-xl">
                    <div className="flex items-center justify-between">
                        <p className="text-xl"><strong>₫1,794,171</strong>/<span className="text-lg font-semibold text-text3">night</span></p>
                        <p className="flex items-start font-bold gap-x-1 text-text1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 text-primary">
                                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                            </svg>
                            4.82
                        </p>
                    </div>
                    <Gap></Gap>
                    <div className="flex items-start justify-between w-full px-4 py-6 mb-4 border rounded-lg">
                        <p className="flex-1">
                            <strong>Good price: </strong>
                            Your dates are ₫370,211 less than the avg. nightly rate over the last 3 months.
                        </p>
                        <div className="w-[40px]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v.756a49.106 49.106 0 019.152 1 .75.75 0 01-.152 1.485h-1.918l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 0118.75 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 01-.262 1.453h-8.37a.75.75 0 01-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 01-.375.84A6.723 6.723 0 015.25 18a6.723 6.723 0 01-3.181-.795.75.75 0 01-.375-.84L4.168 6.241H2.25a.75.75 0 01-.152-1.485 49.105 49.105 0 019.152-1V3a.75.75 0 01.75-.75zm4.878 13.543l1.872-7.662 1.872 7.662h-3.744zm-9.756 0L5.25 8.131l-1.872 7.662h3.744z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    <form className="w-full p-4 border rounded-lg">
                        <Field>
                            <Label>Check In</Label>
                            <Input type="date" name="checkin" className='border-2' control={control}></Input>
                        </Field>
                        <Field>
                            <Label>Check Out</Label>
                            <Input type="date" name="checkout" className='border-2' control={control}></Input>
                        </Field>
                        <div className="flex flex-col sm:items-center sm:gap-x-10 gap-y-2 sm:flex-row ">
                            <Field>
                                <Label>Adults</Label>
                                <QuantityInput value={value.adult} onDecrease={() => {
                                    setValue(prev => ({ ...prev, adult: prev.adult - 1 }))
                                }}
                                    onIncrease={() => {
                                        setValue(prev => ({ ...prev, adult: prev.adult + 1 }))
                                    }}
                                ></QuantityInput>
                            </Field>
                            <Field>
                                <Label>Children</Label>
                                <QuantityInput value={value.children} onDecrease={() => {
                                    setValue(prev => ({ ...prev, children: prev.children - 1 }))
                                }}
                                    onIncrease={() => {
                                        setValue(prev => ({ ...prev, children: prev.children + 1 }))
                                    }}
                                ></QuantityInput>
                            </Field>
                        </div>
                        <Gap></Gap>
                        <Button kind="primary" className="w-full">Reserve</Button>
                    </form>
                </div>
            </div>
            {/* subinfo */}
            {/* avatar */}
            {/* service */}
            {/* where you sleep */}
            {/* what this place offers */}
            {/* Reviews */}
        </ClientLayout>
    );
};

export default TravelDetail;