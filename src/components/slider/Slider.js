import React from 'react';
import './slider.scss';
import img from './../../assets/images/flagARM.jpg'
import img2 from './../../assets/images/flagENG.jpg'

import OWLcorusel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.min.css'

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

const options = {
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        650: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    },
  };
  

function Slider(props) {
    // let ProductsElement = props.productsItems.map((products, index) => <Slider_item name={products.name} text={products.text} link={products.link} key={index} CardImg={products.Cardimg}/>)
    return (
    <>
        <section className='productsSlider'>
            <OWLcorusel  items='3' autoplay autoplayHoverPause dots loop responsive={options.responsive} >
                {/* {ProductsElement} */}
                <img src={img} alt=''/>
                <img src={img2} alt=''/>
                <img src={img} alt=''/>
                <img src={img2} alt=''/>
                <img src={img} alt=''/>
            </OWLcorusel>
        </section>
    </>
  );
}

export default Slider;
