import React, { useState } from 'react';
import ShopContext from './ShopContext';

export const ShopContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    return (
        <ShopContext.Provider value={{ cartItem, setCartItem }}>
            {children}
        </ShopContext.Provider>
    );
}



