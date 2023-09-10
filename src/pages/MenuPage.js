import React, { useState } from "react";
import Products from "../components/Products";
import CatButtons from "../components/CatButtons";
import Pagination from "../components/Pagination";
import { allItems } from "../data/prodcutsData";

export default function MenuPage({ addToCart , showProduct}) {
  const [selectedCatId, setSelectedCatid] = useState(null);

  let upperLimit=0;
  let lowerLimit=0;
  const [products, setProducts] = useState(allItems);
  const page = (item) => {
    if(upperLimit!==item){
    upperLimit=item;
    lowerLimit=upperLimit-9
    setProducts(allItems.filter((product) =>{
      if(product.id >= lowerLimit && product.id <= upperLimit){
               return product;
      }
    })
    )
  }
  }
  const onCatSelection = (catId) => {
    console.log(catId);
    // console.log(typeof catId);
    setSelectedCatid(catId);
    const filteredItems = allItems.filter((p) => p.categoryId === catId);
    setProducts(filteredItems);
  };

  return (
    <>
      <div className="container mb-5">
        <CatButtons onCatSelection={onCatSelection} selectedCatId={selectedCatId}/>
        <Products addToCart={addToCart} items={products} showProduct={showProduct}/>
        <Pagination page={page}/>
      </div>
    </>
  );
}
