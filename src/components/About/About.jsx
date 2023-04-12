import React from "react";
import blankProfile from "../../images/blank_pfp.jpeg";
import paolaImg from "../../images/pp_paola.jpg";
import seanImg from "../../images/download.jpg";
import michaelImg from "../../images/michael_pfp.png";
import jobinImg from "../../images/jobin.jpeg";
import marioImg from "../../images/MarioProfile.png";

const About = () => {
  return (
    <div class="container-fluid">
      <div class="container-fluid">
        <div class="row justify-content-md-center">
          <h2 class="b">Our Purpose</h2>
          <p>
            As the developers of a our travelling website, our aim is to provide
            a seamless and stress-free experience for travellers, from the
            initial research phase to the actual trip itself. To achieve this,
            my website will offer a unique blend of informative content,
            user-friendly design and excellent customer service. To
            differentiate our website from the competition, we focused on
            providing personalized travel recommendations based on the user's
            preferences and interests. Additionally, the website will feature a
            variety of niche destinations and experiences that are not commonly
            found on other travel websites.
          </p>
        </div>
        <div class="row">
          <div class="row justify-content-md-center">
            <h2 class="c">Meet the Team</h2>
          </div>
          <div class="row">
            <div class="col">
              <img class="pfp-paola" style={{width:"55%"}} src={jobinImg} />
              <h5>Jobin Kurian</h5>
              <h6>Team Lead</h6>
              <h7>
                Student pursuing a Computer Science degree at Florida
                International University
              </h7>
            </div>
            <div class="col">
              <img class="pfp-paola" style={{width:"55%"}}src={marioImg} />
              <h5>Mario Oliva</h5>
              <h6>Programmer</h6>
              <h7>
                Student pursuing a Computer Science degree at Florida
                International University
              </h7>
            </div>
            <div class="col">
              <img class="pfp-paola" src={paolaImg} />
              <h5>Paola Hernandez</h5>
              <h6>Programmer</h6>
              <h7>
                Student pursuing a Computer Science degree at Florida
                International University
              </h7>
            </div>
            <div class="col">
              <img class="pfp-paola" style={{width:"55%"}} src={michaelImg} />
              <h5>Michael Yon</h5>
              <h6>Programmer</h6>
              <h7>
                Student pursuing a Computer Science degree at Florida
                International University
              </h7>
            </div>
            <div class="col">
              <img class="pfp-paola" src={seanImg} />
              <h5>Sean Ordonez</h5>
              <h6>Programmer</h6>
              <p>
                Student pursuing a Computer Science degree at Florida
                International University
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
