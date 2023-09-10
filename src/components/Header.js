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
        {/* <img src="https://www.kfcpakistan.com/static/media/bucket-filled.d2ad11819eca0f28a8ac.svg"
        alt="KFC"
        width="40px"
        height="40px">
        </img> */}
        {cartCounter}
        </button>
      </a>
      <button className="btn" type="submit">
        LOGIN
      </button>
    </div>

  </nav>











    
//     <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Link</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Dropdown
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider" /></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link disabled" aria-disabled="true">Disabled</a>
//         </li>
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>

//       <button
//         className="btn btn-primary"
//         type="button"
//         data-bs-toggle="offcanvas"
//         data-bs-target="#offcanvasRight"
//         aria-controls="offcanvasRight"
//       >
//         Cart({cartCounter})
//       </button>

//     </div>
//   </div>
// </nav>
  )
}
