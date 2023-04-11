import React from "react";
import locationImg from "../../images/sagrada.jpeg";
import location1Img from "../../images/washington.jpeg";
import location2mg from "../../images/nyc.jpeg";
import location3mg from "../../images/savannah.jpeg";
import location4Img from "../../images/sanfran.jpeg";
import location5mg from "../../images/denver.jpeg";
import location6mg from "../../images/austin.jpeg";
import location7Img from "../../images/nashville.jpeg";
import location8mg from "../../images/keywest.jpeg";
import location9mg from "../../images/seattle.jpeg";

const Discover = () => {
  return (
    <div>
      <div class="container-fluid">
        <div class="container-fluid">
          <div class="row justify-content-md-center">
            <h2 class="d">Discover More</h2>
          </div>
          <div class="row justify-content-md-center">
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location1Img} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Washington DC, District of Columbia</h5>
                <p class="card-text">
                Welcome to the Nation's Capital! Washington, D.C., is a city steeped in history, culture, and politics, offering a unique and enriching experience for visitors. Explore iconic landmarks like the White House, the U.S. Capitol, and the National Mall, home to world-class museums and memorials.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location2mg} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> New York City, New York </h5>
                <p class="card-text">
                Welcome to the Big Apple! New York City is a world-renowned destination offering an unforgettable experience. Discover iconic landmarks like Times Square, Central Park, and the Statue of Liberty. Immerse yourself in the city's diverse culture with its renowned museums, Broadway shows, and vibrant neighborhoods. 
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location3mg} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Savannah, Georgia </h5>
                <p class="card-text">
                Welcome to Savannah, Georgia! This charming southern city is known for its historic architecture, rich culture, and Southern hospitality. Stroll along the picturesque streets lined with moss-draped oak trees, visit historic squares, and take in the beauty of the Savannah River.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-md-center">
          <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location4Img} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> San Francisco, California </h5>
                <p class="card-text">
                Experience the magic of San Francisco! This iconic city on the West Coast of the United States offers a vibrant blend of culture, history, and natural beauty. Marvel at the Golden Gate Bridge, explore the charming neighborhoods, ride the iconic cable cars, and indulge in world-class cuisine. 
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location5mg} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Denver, Colorado </h5>
                <p class="card-text">
                Experience the beauty of Colorado! From majestic mountains to vibrant cities, Colorado offers diverse outdoor adventures, cultural attractions, and unique experiences. 
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location6mg} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Austin, Texas </h5>
                <p class="card-text">
                Welcome to the Live Music Capital of the World! Austin, Texas, is a vibrant and dynamic city known for its unique blend of music, culture, and outdoor adventures. Experience the city's legendary live music scene, with numerous venues showcasing local talent and genres ranging from rock to blues to country. 
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div class="row justify-content-md-center">
          <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location7Img} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Nashville, Tennessee</h5>
                <p class="card-text">
                  There's no better place to experience music than Nashville, come visit the music city, have fun bar hopping and line dancing. There's so much rich country music history that it's a must to visit the famous Grand Ole Opry
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location8mg} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Key West, Florida</h5>
                <p class="card-text">
                  Our drive-to islands are rich in arts & culture, yet if you crave the wild outdoors, our guided eco-tours, walking trails, environmental centers and a plethora of green travel initiatives will satisfy.
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
            <div class="card" style={{ width: "18rem" }}>
              <img class="card-img-top" src={location9mg} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title"> Seattle, Washington</h5>
                <p class="card-text">
                Visit a vibrant and dynamic destination offering a unique blend of urban culture and natural beauty. Marvel at the iconic Space Needle, explore the lively Pike Place Market, and take in the stunning views of Puget Sound and the surrounding mountains. 
                </p>
                <a href="#" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Discover;
