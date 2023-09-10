import React from 'react'

export default function Header({cartCounter}) {
  return (




    <nav className="nav">
    <div className="container-1">
      <i className="fa-solid fa-bars" id="icon"></i>
      <a className="nav" href="#">
        <img
          src="https://logodix.com/logo/376960.png"
          alt="KFC"
          width="110px"
          height="50px"
        />
      </a>

      <div className="nav-svg">
        <img
          src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"
          alt=""
          width="30pxpx"
          height="25px"
        />
        <span className="svg-nm">DELIVERY</span>
      </div>

      <div className="nav-svg">
        <img
          src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"
          alt=""
          width="25pxpx"
          height="25px"
        />
        <span className="svg-nm">PICK-UP</span>
      </div>
    </div>

    <div className="container-1 container-end">
      <a className="open-btn" href="#">
        <button
          className="bucket btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
       
        {cartCounter}
        </button>
      </a>
      <button className="btn" type="submit">
        LOGIN
      </button>
    </div>

  </nav>

  )
}
