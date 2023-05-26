import React from 'react';
import about from "../../../assets/about.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    AOS.init();
    return (
        <div className=''>
            <div className='py-16 container mx-auto'>
                <div className='grid md:grid-cols-12 gap-4 justify-center items-center'>
                    <div className='col-span-6 h-full'>
                        <img src={about} className='w-full rounded-md h-[550px]' alt="" />
                    </div>
                    <div className='col-span-6 h-full' >
                        <div>
                            <h2 className='text-3xl mt-3 mb-6 font-semibold'>What You Can Have:</h2>
                            <div class="flex " data-aos="flip-left"
     data-aos-duration="2000"><h1 class="text-font text-6xl me-5 text-purple-700 ">01</h1>
                                <div className=''>
                                    <h1 class="mb-4 md:mt-4 lg:mt-4 font-bold text-2xl">A better Toy selection</h1><p class="text-gray-500"> Introducing a toy selection in your store will appeal to more customers, whether they are families or people looking to gift toys to their family and friends.</p>
                                </div>
                            </div>
                            <div class="flex" data-aos="flip-right"
     data-aos-duration="2000"><h1 class="text-font text-6xl me-5 text-purple-700 ">02</h1><div><h1 class="mb-4 md:mt-4 lg:mt-4 font-bold text-2xl">Exchange Opportunites</h1><p class="text-gray-500">Curious World gives you flexibility
                                and peace of mind when you need to service existing
                                products vital to overall productivity. We make the
                                exchange trouble-free and keep you up and running
                                while your product is being repaired.</p></div></div>
                            <div class="flex" data-aos="flip-left"
     data-aos-duration="2000"><h1 class="text-font text-6xl me-5 text-purple-700 ">03</h1><div><h1 class="mb-4 md:mt-4 lg:mt-4 font-bold text-2xl">Budget Friendly Toy</h1><p class="text-gray-500"> Most shops are filled with several mass-made toys that are easy on the pocket, but it might not be wise to invest in them. Instead, you can choose those that your child will not only be excited to play with but also nurture his overall development.</p></div></div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;