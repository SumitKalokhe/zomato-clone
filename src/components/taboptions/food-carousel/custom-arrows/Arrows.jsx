import React from "react";
import './arrow.css'

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-prev-arrow`} onClick={onClick}>
            <section tabIndex="0" role="button" aria-controls="carousel-items" aria-label="Previous Slide" className="sc-1krzjx0-2 iBfEVA">
                ::before
            </section>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-next-arrow`} onClick={onClick}>
            <section tabIndex="0" role="button" aria-controls="carousel-items" aria-label="Next Slide" className="sc-1krzjx0-2 bPeSFW">
                ::before
            </section>
        </div>
    );
};


export { CustomPrevArrow, CustomNextArrow };
