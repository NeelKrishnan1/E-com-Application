import React from 'react';
import Product from './Product';
import img from '../Image/back.jpg';
const Navbar=()=> {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand fw-bold fs-5" href="#" h1>LA COLLECTION</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-auto mb-2 mb-lg-0">
      <a className="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">Product</a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link disabled" href="#">Contact</a>
    </div>
  </div>
</nav>
<img src={img} alt="image" class="img-thumbnail"></img>
<Product/>
</div>
    )
}

export default Navbar;