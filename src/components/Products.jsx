import React from 'react';
import KfcCard from './KfcCard';

export default function Products({addToCart, items, showProduct}) {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4">
     
    {
        items.map(item => <KfcCard key={item.id} item={item} addToCart={addToCart} showProduct={showProduct}/>)
    }
    </div>
  )
}
