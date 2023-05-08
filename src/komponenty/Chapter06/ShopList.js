import React from 'react';
import ShopItemHeader from "./ShopItemHeader";
const ShopList = ({shopList}) => {    
    return (
            <>
                {
                shopList.map(el => {
                    return <ShopItemHeader  key={el.title} title={el.title} image={el.image}/> })            
                }        
            </>    
            );
};

export default ShopList;