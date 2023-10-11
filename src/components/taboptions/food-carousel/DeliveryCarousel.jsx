import React from "react";
import './delivery-carousel.css';
import Slider from "react-slick";
import { CustomPrevArrow, CustomNextArrow } from "./custom-arrows/Arrows";
import Menu from "../../menu/menu";

const DeliveryCarousel = ({ deliveryItem }) => {

    const sliderSettings = {
        infinite: true,
        speed: 800,
        slidesToShow: 6,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        prevArrow: <CustomPrevArrow />, 
        nextArrow: <CustomNextArrow />, 
    };

    
    return (
        <div className="carousel">
            <div className="carousel-heading max-width">Eat what makes you happy</div>
            <div className="slider">
                <Slider {...sliderSettings} className="max-width carousel-items">
                    {deliveryItem.map((item) => (
                        <div key={item.id} className="carousel-img-name">
                            <div>
                                <img className="carousel-food-img" src={item.img} alt={item.name} />
                            </div>
                            {item.name}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default DeliveryCarousel;
