import React from "react";
import './explorecard.css'
import { Link } from "react-router-dom";
import Menu from "../../menu/menu";


const Explorecard = ({ restaurant }) => {

    const name = restaurant?.info?.name ?? '';
    const coverImage = restaurant?.info?.image?.url;
    const deliveryTime = restaurant?.order?.deliveryTime;
    const rating = restaurant?.info?.rating?.rating_text;
    const approxPrice = restaurant?.info?.cfo?.text;
    // const offers = restaurant?.bulkOffers ?? []; not in use so commented
    const cuisines = restaurant?.info?.cuisine?.map((item) => item.name).slice(0, 3);
    const bottomContainer = restaurant?.bottomContainers ?? [];
    
    return (
        <Link to={'/menu'} className="explore-card" style={{ textDecoration: 'none' }} >
            <div className="explore-card-cover">
                <img src={coverImage} alt={name} className="explore-card-image" />
            </div>
            <div className="resto-name-rating">
                <div className="resto-name">{name}</div>
                <div className="resto-rating">{rating} ⭐</div>
            </div>
            <div className="cuisins-price">
                <div className="cuisins">
                    {cuisines.map((items, i) => {
                        return <span key={items}>{items}{i !== cuisines.length - 1 && ','}</span>
                    })}</div>
                <div className="approx-price">{approxPrice}</div>
            </div>
            <div className="delivery-time-div">
                <div className="delivery-time">{deliveryTime}</div>
            </div>
            {bottomContainer[0]?.text && <div className="explore-card-divider"></div>}

            <div className="bottom-container">
                {/* <img src={bottomContainer[0]?.images?.url} alt="" /> */}
                <div className="bottom-container-image-div">
                    {bottomContainer[0]?.text && <img className="bottom-container-image" src="https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png" alt="" />}</div>
                <div className="bottom-container-text">{bottomContainer[0]?.text}</div>
            </div>
        </Link>
    )
}

export default Explorecard;