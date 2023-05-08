import React from 'react';
import ShopItemDescription from './ShopItemDescription';
import ShopItemHeader from './ShopItemHeader';
import ShopItemPricing from './ShopItemPricing';

const ShopItem = ({item}) => {
    return (
        <section>
            <ShopItemHeader image={item.image} title={item.title} />
            <ShopItemDescription description={item.description} />
            <ShopItemPricing price={item.price} />
        </section>
    );
};

export default ShopItem;