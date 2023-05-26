import React from 'react';
import Marquee from "react-fast-marquee";
import lego1 from "../../../assets/lego1.jpg"
import lego2 from "../../../assets/lego2.jpg"
import lego3 from "../../../assets/lego3.jpg"
import lego4 from "../../../assets/lego4.jpg"
import lego5 from "../../../assets/lego5.jpeg"
import lego6 from "../../../assets/lego6.jpg"

const Marqueeing = () => {
    return (
        <div className='container'>
            <Marquee className='text-danger' speed={100}>
                <div className="card w-56     relative">
                    <figure className="px-4 pt-4">
                        <img src={lego1} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                    <div className="badge badge-secondary py-4 absolute -left-4 top-4">NEW ARRIVAL</div>
                    <div className="card-body items-center text-center">
                    </div>
                </div>
                <div className=" card w-56    relative">
                    <figure className="px-4 pt-4">
                        <img src={lego2} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                    <div className="badge badge-secondary py-4 absolute -left-4 top-4">NEW ARRIVAL</div>
                    <div className="card-body items-center text-center">
                    </div>
                </div>
                <div className=" card w-56    relative">
                    <figure className="px-4 pt-4">
                        <img src={lego3} alt="Shoes" className="rounded-xl min-h-[50%] w-full " />
                    </figure>
                    <div className="badge badge-secondary py-4 absolute -left-4 top-4">NEW ARRIVAL</div>
                    <div className="card-body items-center text-center">
                    </div>
                </div>
                <div className=" card w-56    relative">
                    <figure className="px-4 pt-4">
                        <img src={lego4} alt="Shoes" className="rounded-xl min-h-[50%] w-full " />
                    </figure>
                    <div className="badge badge-secondary py-4 absolute -left-4 top-4">NEW ARRIVAL</div>
                    <div className="card-body items-center text-center">
                    </div>
                </div>
                <div className=" card w-56    relative">
                    <figure className="px-4 pt-4">
                        <img src={lego5} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                    <div className="badge badge-secondary py-4 absolute -left-4 top-4">NEW ARRIVAL</div>
                    <div className="card-body items-center text-center">
                    </div>
                </div>
                <div className=" card w-56    relative">
                    <figure className="px-4 pt-4">
                        <img src={lego6} alt="Shoes" className="rounded-xl min-h-[50%] w-full" />
                    </figure>
                    <div className="badge badge-secondary py-4 absolute -left-4 top-4">NEW ARRIVAL</div>
                    <div className="card-body items-center text-center">
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Marqueeing;