import React from 'react'
import MenuList from '../menu-list/menuList';

const MenuItem = () => {

    const itemList = [
        {
            id: 1,
            name: 'Thali',
            img: "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png"
        },
        {
            id: 2,
            name: 'Dosa',
            img: "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png"
        },
        {
            id: 3,
            name: 'Idli',
            img: "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png"
        },
        {
            id: 4,
            name: 'cake',
            img: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png"
        },
        {
            id: 5,
            name: 'Paratha',
            img: 'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png'
        },
        {
            id: 6,
            name: 'Pizza',
            img: 'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png'
        },
        {
            id: 7,
            name: 'Sandwich',
            img: 'https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png'
        },
        {
            id: 8,
            name: 'Vadapav',
            img: 'https://b.zmtcdn.com/data/o2_assets/3d8a2994d01ae58b54d2a6ba8a0f45b81632716549.png'
        },
        {
            id: 9,
            name: 'Burger',
            img: 'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
        },
        {
            id: 10,
            name: 'Tea',
            img: 'https://b.zmtcdn.com/data/o2_assets/a2163bedb069e3069db0a88d7a3c848f1676534399.png'
        }
    ]
    return (
        <div><MenuList itemList={itemList} /></div>
    )
}

export default MenuItem;