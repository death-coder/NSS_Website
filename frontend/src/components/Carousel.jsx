import React from "react";
import "../App.css";
const Carousel = () =>{
    return (

        // <div className="container mt-5">
            <div>
      {/* <h1 className="text-center text-primary">Welcome to My React App</h1> */}
      
      {/* Bootstrap Carousel */}
      <div id="carouselExample" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://library.iitmandi.ac.in/gallery/_data/i/upload/2020/12/17/20201217164839-dde14635-me.jpg" className="d-block w-100" alt="Nature" />
          </div>
          <div className="carousel-item">
            <img src="https://thumbs.dreamstime.com/b/institute-technology-mandi-iit-mandi-institute-technology-mandi-iit-mandi-public-technical-research-university-253103681.jpg" className="d-block w-100" alt="Water" />
          </div>
          <div className="carousel-item">
            <img src="https://infra.iitmandi.ac.in/img/slider4.jpg" className="d-block w-100" alt="Mountains" />
          </div>
        </div>
        
        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      </div>
    );
};
export default Carousel;