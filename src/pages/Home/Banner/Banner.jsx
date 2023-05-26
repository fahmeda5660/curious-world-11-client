import React from 'react';
import banner from "../../../assets/banner.jpeg"
import "./Banner.css"
const Banner = () => {
    return (
        <div className=' text-left mb-6 flex items-center' style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", width: "100%", height: "100vh" }}>
        
            <div className=' text-center md:text-left lg:text-left container mx-auto' data-aos="fade-up"
     data-aos-duration="3000">
                <h2 className='text-purple-900 text-4xl font-bold'>Best Lego Toy with Affordable Price</h2>
                <p className='text-black text-md font-medium py-4 leading-8'><span className="text-purple-700 font-extrabold">Lego's</span> popularity is demonstrated by its wide  representation <br /> and usage in many forms of cultural  works,  including <br /> books, films, art work and so so on. It has even been <br /> used  in  educational division as a teaching tool.</p>
                <button className="btn bg-purple-500 text-[20px] font-medium text-white px-20 rounded-lg">Shop Now</button>
            </div>
        
    </div>
    );
};

export default Banner;