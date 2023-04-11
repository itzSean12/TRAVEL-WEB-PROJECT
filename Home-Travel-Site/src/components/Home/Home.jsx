import React, {useState, useEffect} from "react";
import "./Home.css";
import WeatherComponent from "./WeatherComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTicket, faHeartCircleCheck, faPiggyBank } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import panel from "../../images/sunset.png"
import tc from "../../images/tech-crunch.png"
import bi from "../../images/business-insider.png"
import mash from "../../images/mashable.png"
import tnw from "../../images/tnw.png"
import clouds from "../../images/above-clouds.png"
import airplane from "../../images/clear-airplane.png"
import mp from "../../images/man-photo.jpg"
import li from "../../images/lady-img.jpg"
import pl from "../../images/phone-lady.png"

const Home = ({ user }) => {
  // const cities = ["London", "New York", "Tokyo", "Sydney", "Paris"];
  const [cities, setCities] = useState(["New York", "London", "Paris", "Tokyo", "Sydney"]);
  const [cityInput, setCityInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (cityInput) {
      const newCities = [...cities];
      newCities.pop();
      newCities.unshift(cityInput);
      setCities(newCities);
      setCityInput('');
    }
  }

  useEffect(() => {
    const handlePageRefresh = () => {
      const header = document.querySelector('panel');
      panel.classList.add('fixed');
    };

    window.addEventListener('beforeunload', handlePageRefresh);

    return () => {
      window.removeEventListener('beforeunload', handlePageRefresh);
    };
  }, []);
  
  return (
  <div class="home-sec">
      {/* <div>
        <WeatherComponent key={cities[0]} city={cities[0]} />
    </div> */}
      <section class="colored-section" id="title">

<div class="container-fluids main-pic" style={{ backgroundImage: `url(${clouds})` }}>
  <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="">SmartTravel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto" style={{paddingLeft:'25rem', paddingBottom:'4rem'}}>
        <li class="nav-item">
        <button class="btn btn-lg col-12 btn-outline-info" type="button" style={{height:'20%', marginBottom: '1rem'}}>
          <a class="nav-link" href="#footer">Contact</a>
          </button>
        </li>
        <li class="nav-item">
        <button class="btn btn-lg col-12 btn-outline-info" type="button" style={{height:'20%', marginBottom: '1rem'}}>
          <a class="nav-link" href="#pricing">Pricing</a>
          </button>
        </li>
        <li class="nav-item">
        <button class="btn btn-lg col-12 btn-outline-info" type="button" style={{height:'20%', marginBottom: '1rem'}}>
          <a class="nav-link" href="#cta" style={{marginTop: '-.7rem'}}>Download</a>
          </button>
        </li>
      </ul>
    </div>
  </nav>
  <div class ="welcome-msg">
        <h1>Welcome {user.name}!</h1>
        <div style={{color: 'transparent'}}>Email: {user.email}</div>
      </div>

  <div class="main-area">

    {/* <img class="title-image" src={"images/travelers-logo.png"} alt="travel-logo"></img> */}

    <div class="row head-row">
      <div class="col-lg-6">
        <h1 class="big-heading"><b>Need A Weather Check?</b></h1>
      </div>
      <div class="col-lg-6">
        <img class="title-trans-image" src={airplane} alt="flying-plane"></img>
      </div>
      <div class="topnav">
      <form onSubmit={handleSubmit}>
        <div class="search-container">
            <input 
              type="text" 
              value={cityInput} 
              placeholder="Lookup Your Next Getaway's Climate..." 
              name="search"
              onChange={(event) => setCityInput(event.target.value)}
              />
            <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</section>

<h1 class="big-heading-2"><b>Popular Destinations</b></h1>

<section class="white-section" id="features">

<div className="panel" style={{width: '15%', paddingTop: '2%', backgroundImage: `url(${panel})` }}>
        <WeatherComponent key={cities[0]} city={cities[0]}/>
      </div>
      <div className="panel" style={{width: '15%', paddingTop: '2%', backgroundImage: `url(${panel})` }}>
        <WeatherComponent key={cities[1]} city={cities[1]}/>
      </div>
      <div className="panel" style={{width: '15%', paddingTop: '2%', backgroundImage: `url(${panel})` }}>
        <WeatherComponent key={cities[2]} city={cities[2]}/>
      </div>
      <div className="panel" style={{width: '15%', paddingTop: '2%', backgroundImage: `url(${panel})` }}>
        <WeatherComponent key={cities[3]} city={cities[3]}/>
      </div>
      <div className="panel" style={{width: '15%', paddingTop: '2%', backgroundImage: `url(${panel})` }}>
        <WeatherComponent key={cities[4]} city={cities[4]}/>
      </div>

<div class="container-fluids">

<h1 class="big-heading-2"><b>Why Choose Us</b></h1>

  <div class="row">
    <div class="col-lg-4">
      <center>
      <FontAwesomeIcon class="icons" icon={faTicket}/>
        <h3 class="feature-title"><b>In-App Ticket Purchases</b></h3>
        <p class="description">Simple and easy to find your nearest flight.</p>
      </center>
    </div>
    <div class="col-lg-4">
      <center>
      <FontAwesomeIcon class="icons" icon={faHeartCircleCheck}/>
        <h3 class="feature-title"><b>Lovely Flight Confirmation</b></h3>
        <p class="description">Stay up to date with your latest trip with a simple reminder.</p>
      </center>
    </div>
    <div class="col-lg-4">
      <center>
      <FontAwesomeIcon class="icons" icon={faPiggyBank}/>
        <h3 class="feature-title"><b>The Best Prices</b></h3>
        <p class="description">Our travel opportunities are the most reliable and inexpensive.</p>
        </center>
    </div>
  </div>

</div>

</section>

<section class="colored-section" id="testimonials">

<div id="testimonial-carousel" class="carousel slide" data-bs-ride="false">
  <div class="carousel-inner">
    <div class="carousel-item active container-fluids">
      <h2 class="testimonial-text">"Thank you SmartTravel for my safe trip to Bahamas. I had a blast!"</h2>
      <img class="testimonial-image" src={mp} alt="man-profile"></img>
      <em>Marcus, Illinois</em>
    </div>
    <div class="carousel-item container-fluids">
      <h2 class="testimonial-text">"Definitely recommend SmartTravel to anyone seeking a great vacation experience. The site is simple to use."</h2>
      <img class="testimonial-image" src={li} alt="lady-profile"></img>
      <em>Laura, New York</em>
    </div>
  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#testimonial-carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>

</section>

<section class="colored-section" id="press">
<img class="press-logo" src={tc} alt="tc-logo"></img>
<img class="press-logo" src={tnw} alt="tnw-logo"></img>
<img class="press-logo" src={bi} alt="biz-insider-logo"></img>
<img class="press-logo" src={mash} alt="mashable-logo"></img>

</section>

<section class="white-section" id="pricing">

<h2 class="section-heading">SmartTravel Plus is here!</h2>
<p>What are you waiting for? Make a splash by the sand and find latest deals on flights and hotels straight away. </p>

<div class="row">

  <div class="pricing-column col-lg-4 col-md-6">

    <div class="card">
      <div class="card-header">
        <h3>Leisure</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">Free</h2>
        <p>Limitless Flight Browsing</p>
        <p>Hotel Browsing Deals</p>
        <p>Daily Recommended Travels</p>
        <button class="btn btn-lg col-12 btn-outline-info" type="button">Sign Up</button>
      </div>
    </div>

  </div>

  <div class="pricing-column col-lg-4 col-md-6">

    <div class="card">
      <div class="card-header">
        <h3>Business</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">$49.99 / mo</h2>
        <p>Flight and Hotel Discounts</p>
        <p>Multiple Bookings at Once</p>
        <p>VIP Tickets Included</p>
        <button class="btn btn-lg col-12 btn-outline-info" type="button">Sign Up</button>
      </div>
    </div>

  </div>

  <div class="pricing-column col-lg-4">

    <div class="card">
      <div class="card-header">
        <h3>Expert</h3>
      </div>
      <div class="card-body">
        <h2 class="price-text">$99.99 / mo</h2>
        <p>Unlock In-Flight Rewards</p>
        <p>Access to Exclusive Suites</p>
        <p>First-Class Flying Guaranteed</p>
        <button class="btn btn-lg col-12 btn-outline-info" type="button">Sign Up</button>
      </div>
    </div>

  </div>

</div>

</section>


<section class="colored-section" id="cta">

<h3 class="cta-message"><b>Experience SmartTravel's Greatness.</b></h3>
<h3 class="cta-message2"><b>Now on Mobile.</b></h3>
<button type="button" class="btn btn-dark btn-lg download-button"> <FontAwesomeIcon icon={faApple}/> Download</button>
<button type="button" class="btn btn-light btn-lg download-button"><FontAwesomeIcon icon={faGooglePlay}/> Download</button>
<img class="phone-lady-trans" src={pl} alt="phone-lady"></img>

</section>


<footer class="white-section" id="footer">

<div class="footer-buttons">

  <i class="brand-icon"><FontAwesomeIcon icon={faTwitter}/></i>
  <i class="brand-icon"><FontAwesomeIcon icon={faFacebook}/></i>
  <i class="brand-icon"><FontAwesomeIcon icon={faInstagram}/></i>

  <div>

    <p>© Copyright 2023 SmartTravel</p>

  </div>

  </div>

  </footer>
  </div>
  );
};

export default Home;
