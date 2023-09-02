
import React from 'react';
import Image1 from '../../../../../public/aesop-bestsellers-640-1583408732.jpg'
import Image2 from '../../../../../public/AESOP-LEAD.webp'
import Image3 from '../../../../../public/aesop.webp'
import product1 from '../../../../../public/Product-removebg-preview.png'
import product4 from '../../../../../public/Product3-removebg-preview.png'
import product5 from '../../../../../public/Product4.png'
import product6 from '../../../../../public/Product5-removebg-preview.png'
import product7 from '../../../../../public/Product7-removebg-preview.png'
import Slider2 from '../Slider2';

const ForTheSkin = () => {
    return (
        <>
            <Slider2
                p={'For the skin'}
                h2={'Attention for all types'}
                p2={'The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types'}
                button={'See all Skin Care'}
                image1={product1}
                image2={product4}
                image4={product7}
                image5={product5}
                image6={product6}
                title1='Nature bar Shop'
                title2='Polish bar Shop'
                title4='Nature bar Shop'
                title5='Polish bar Shop'
                title6='Refresh bar Shop'
                description1='Offers mild yet effective cleanse'
                description2='Thoroughly cleanse and exfoliates skin'
                description4='Offers mild yet effective cleanse'
                description5='Thoroughly cleanse and exfoliates skin'
                description6='Offers a through and enlivening cleanse '
            ></Slider2>
        </>
    );
};

export default ForTheSkin;