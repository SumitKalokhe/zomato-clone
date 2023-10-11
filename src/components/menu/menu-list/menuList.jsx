import React, { useContext } from 'react'
import './menu-list.css'

const MenuList = ({ itemList }) => {

    


    return (
        <div>
            <div className='food-items'>
                {itemList.map((item) => (
                    <div className='food-name-add-cart' key={item.id}>
                        <div className='menu-foodandname'>
                            <div className='menu-food-image-div'>
                                <img className='menu-food-image' src={item.img} alt="" />
                            </div>
                            <div className='food-name'>
                                {item.name}
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center', width: '4rem', margin: "auto 0" }}>
                            <div className='addtocart-button'>add</div>
                            {/* <button>add</button> */}
                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default MenuList;