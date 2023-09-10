import React from "react";

export default function KfcCard({ item, addToCart, showProduct }) {
  return (




    <div className="value-box">
      <div className="product" style={{ width: "18rem" }}>
        <img src={item.image} className="p-img" alt="..." />
        <div className="p-body">
          <div className="title">
            <h5 className="p-title">{item.title}</h5>
          </div>
       

          <h4 id="p-price">Rs.{item.price}</h4>

          <div className="add-cart">
            <button
              href="#"
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#cartviewoffcanvasRight-1"
              aria-controls="offcanvasRight"
              onClick={() => {
                showProduct(item);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
     </div>





    // <div className="col">
    // <div className="card" style={{ width: "18rem" }}>
    //   <img src={item.image} className="card-img-top" alt="kfc card" />
    //   <div className="card-body">
    //     <h5 className="card-title">{item.title}</h5>
    //     <p className="card-text">
    //         {item.description}
    //         <span className="badge text-bg-info">Rs. {item.price}</span>
    //     </p>

    //     <button
    //       className="btn btn-primary"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#cartviewoffcanvasRight-1"
    //       aria-controls="offcanvasRight"
    //       onClick={() =>{
    //         showProduct(item)
    //     }
    //    }
    //       >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
    // </div>
  );
}
