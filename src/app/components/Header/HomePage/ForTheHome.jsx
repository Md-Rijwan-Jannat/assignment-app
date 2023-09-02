
import React from 'react';
import Image1 from '../../../../../public/aesop-bestsellers-640-1583408732.jpg'
import Image2 from '../../../../../public/AESOP-LEAD.webp'
import Image3 from '../../../../../public/aesop.webp'
import product1 from '../../../../../public/home3-removebg-preview.png'
import product4 from '../../../../../public/Home6-removebg-preview.png'
import product5 from '../../../../../public/homw2-removebg-preview.png'
import product6 from '../../../../../public/home4.webp'
import product7 from '../../../../../public/home5.webp'
import Slider2 from '../Slider2';

const ForTheHome = () => {
    return (
        <>
            <Slider2
                p={'For the Home'}
                h2={'Domestic pleasures'}
                p2={'Our range of aromatic formulations for the home are practical and pleasing in equal measure.'}
                button={'See all Home'}
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

export default ForTheHome;