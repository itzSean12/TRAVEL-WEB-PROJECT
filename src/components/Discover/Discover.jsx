import React from "react";
import locationImg from "../../images/sagrada.jpeg";

const Discover = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="row justify-content-md-center">
            <h2 class="d">Discover More</h2>
          </div>

          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={locationImg} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Barcelona, Spain</h5>
              <p class="card-text">
                Immerse yourself in the culture by going to tapas, drinking beer
                at the CampNou Stadium, dancing tango in the plazas and enjoying
                the view of the amazing Sagrada Familia Cathedral.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={locationImg} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Barcelona, Spain</h5>
              <p class="card-text">
                Immerse yourself in the culture by going to tapas, drinking beer
                at the CampNou Stadium, dancing tango in the plazas and enjoying
                the view of the amazing Sagrada Familia Cathedral.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={locationImg} alt="Card image cap" />
            <div class="card-body">
              <h5 class="card-title">Barcelona, Spain</h5>
              <p class="card-text">
                Immerse yourself in the culture by going to tapas, drinking beer
                at the CampNou Stadium, dancing tango in the plazas and enjoying
                the view of the amazing Sagrada Familia Cathedral.
              </p>
              <a href="#" class="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
