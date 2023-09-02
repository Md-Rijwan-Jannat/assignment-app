
import React from 'react';
import Image1 from '../../../../../public/aesop-bestsellers-640-1583408732.jpg'
import Image2 from '../../../../../public/AESOP-LEAD.webp'
import Image3 from '../../../../../public/aesop.webp'
import Slider from '../Slider';

const ForTheBody = () => {
    return (
        <>
            <Slider
                p={'For the body'}
                h2={'An Expression of care'}
                p2={' Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.'}
                button={'See all Body Care'}
                image1={Image1}
                image2={Image2}
                image3={Image3}
                title1='Nature bar Shop'
                title2='Polish bar Shop'
                title3='Refresh bar Shop'
                description1='Offers mild yet effective cleanse'
                description2='Thoroughly cleanse and exfoliates skin'
                description3='Offers a through and enlivening cleanse '
            ></Slider>
        </>
    );
};

export default ForTheBody;