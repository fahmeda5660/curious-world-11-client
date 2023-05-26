import React from 'react';
import reviewImg from "../../../assets/legoPic.jpg"
import {FaHandHoldingHeart, FaUsers, FaMedal } from 'react-icons/fa';
import CountUp from 'react-countup';

const Review = () => {
    return (

        <div style={{ backgroundImage: `url(${reviewImg})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", }}>
            <div className='w-full h-full flex  justify-center items-center backdrop-brightness-50'>
                <div className="container">
                    <div className='grid grid-cols-1 lg:grid-cols-3 space-y-8 lg:space-y-0 items-center justify-center text-center text-white'>
                        <div className=' py-12'>
                        <span className='flex justify-center text-white text-7xl mb-4'><FaHandHoldingHeart></FaHandHoldingHeart></span>
                            <div>
                                <h3 class="text-3xl font-semibold mb-2"> <CountUp start={500} end={2156} duration={5} />+</h3>
                                <p class="text-xl font-medium">Successful Delivery</p>
                            </div>
                        </div>
                        <div className=' py-12'>
                            <div className='  lg:border-r lg:border-l border-white/50'>
                            <span className='flex justify-center text-white text-7xl mb-4'><FaUsers></FaUsers></span>
                                <div>
                                    <h3 class="text-3xl font-semibold mb-2"> <CountUp start={570} end={11200} duration={5} />+</h3>
                                    <p class="text-xl font-medium">Happy Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className=' py-12'>
                        <span className='flex justify-center text-white text-7xl mb-4'><FaMedal></FaMedal></span>
                            <div>
                                <h3 class="text-3xl font-semibold mb-2"> <CountUp start={0} end={50} duration={5} />+</h3>
                                <p class="text-xl font-medium">Years of Experience</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;