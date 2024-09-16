import React, { useContext, useEffect } from 'react';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { allProduct } = useContext(ShopContext); // Destructure allProduct from context
  useEffect(() => {
    window.scrollTo(0, 0);
}, [allProduct]);
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 my-4'>
      {allProduct.map((item, i) => {
        if (props.category === item.category) {
          return (
            <Item 
              key={i} 
              id={item.id} 
              name={item.name} 
              image={item.image} 
              new_price={item.new_price} 
              old_price={item.old_price} 
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default ShopCategory;
