import React from 'react';
import Explorecard from './explore-cards/exploreCard';
import './explore.css'



const Explore = ({ list, heading }) => {


    return (
        <div className="max-width explore-section">
            <div className='explore-title'>{heading}</div>
            <div className='explore-grid'>
                {list.map((restaurant) => {
                    return (
                        <Explorecard restaurant={restaurant} />
                    )
                })}
            </div>
        </div>
    )
}

export default Explore;