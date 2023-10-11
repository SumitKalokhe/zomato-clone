import React, { } from "react";
import "./filters-style.css"

const Filters = () => {

    const filterItems = [
        {
            id: 1,
            name: "Filters",
            icon: "/filters-images/filters-icon.png"
        },
        {
            id: 2,
            name: "Ratings",
            ratings: "4+"
        },
        {
            id: 3,
            name: "Food type"
        }
    ];

    return (

        <div className="filters max-width">
            {filterItems.map((items) =>
                <div className="filter-items" key={items.id}>
                    <img className={items.icon && "filter-image"} src={items.icon} alt="" />
                    <div className="filter-name">
                        {items.name}{items.ratings && `: ${items.ratings}`}
                    </div>

                </div>)}
        </div>

    )
}

export default Filters;