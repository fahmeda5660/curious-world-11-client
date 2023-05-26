import React from 'react';
import gallery1 from "../../../assets/gallery1.jpg"
import gallery2 from "../../../assets/gallery2.jpg"
import gallery3 from "../../../assets/gallery3.jpg"
import gallery4 from "../../../assets/gallery4.jpg"
import gallery5 from "../../../assets/gallery5.png"
import gallery6 from "../../../assets/gallery6.jpg"
import "./Gallery.css"
const Gallery = () => {
    return (
        
        <div className='mt-10'>
        <h2 className='text-center  text-[22px] mb-2 text-black font-bold'>Most popular Lego Toys</h2>
        <p className="text-center  text-[18px] mb-8 text-[#343333]"><span className='text-purple-700 font-semibold'>LEGO</span> blocks are great for developing fine-motor skills in younger builders.</p>
        <div class="gallery  md:grid md:grid-rows-8 md:grid-rows-[5vw] lg:grid lg:grid-rows-8 lg:grid-rows-[5vw] gap-4 container mb-4">
            <figure class="gallery__item gallery__item--1">
                <img src={gallery2} class="gallery__img" alt="Image 1" />
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img src={gallery1} class="gallery__img" alt="Image 2" />
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img src={gallery3} class="gallery__img" alt="Image 3" />
            </figure>
            <figure class="gallery__item gallery__item--4">
                <img src={gallery4} class="gallery__img" alt="Image 4" />
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img src={gallery5} class="gallery__img" alt="Image 5" />
            </figure>
            <figure class="gallery__item gallery__item--6">
                <img src={gallery6} class="gallery__img" alt="Image 6" />
            </figure>
        </div>
    </div>
    );
};

export default Gallery;