import React from "react";
import { allItems } from "../data/prodcutsData";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'; // Import the Swal CSS



export default function CartViewMenu({product,addToCart}) {
  const Alert = () => {
  Swal.fire("my alert !")
  }

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabindex="-1"
        id="cartviewoffcanvasRight-1"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            product details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
            
        {product.length ? (
            
            product.map(p => 
            <p>

               

                <div className="col">
                <div  style={{ width: "18rem" }}>
                <img src={p.image} className="card-img-top" alt="kfc card" />
                <div className="card-body">
                    <h5 className="card-title">{p.title}</h5>
                    <p className="card-text">
                        {p.description}
                        
                    </p>
    
                </div>
                </div>
                </div>

                <br></br>
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    addToCart(p);
                    Alert();
                  }}
                  data-bs-dismiss="offcanvas"
                  id="liveToastBtn"
                >
                  Add to Cart
                </button>




                
            
            </p>)
            

          ) : (
            <p>Cart is Empty</p>
          )
          }

        </div>
        
        
      </div>
    </>
  );
}

