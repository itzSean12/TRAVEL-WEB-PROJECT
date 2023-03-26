import React, { useState, useEffect } from "react";
import "./Flights.css";

const Flights = () => {
  const [data, setData] = useState();
  const [airlineName, setAirlineName] = useState("");
  const [flightDeparture, setFlightDeparture] = useState(null);
  const [flightArrival, setFlightArrival] = useState(null);
  const [newFlightDeparture, setNewFlightDeparture] = useState(null);
  const [newFlightArrival, setNewFlightArrival] = useState(null);
  const [departureDate, setDepartureDate] = useState("");

  useEffect(() => {
    const params = new URLSearchParams({
      access_key: "da7b3afef5321ccda4cab870d8da12a7",
      limit: 100,
    });
    fetch(`http://api.aviationstack.com/v1/flights?${params}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const onInputChangeDeparture = (e) => {
    setDepartureDate(e.target.value);
  };

  const onButtonSubmitDeparture = () => {
    const matchingDepartureDate = data.data.find(
      (flight) =>
        new Date(flight.departure.scheduled).toLocaleString(
          "en-US",
          options
        ) === departureDate
    );

    if (matchingDepartureDate) {
      setNewFlightDeparture(matchingDepartureDate.departure);
      setNewFlightArrival(matchingDepartureDate.arrival);
      console.log(matchingDepartureDate.airline.name);
    } else {
      console.log("No match");
    }
  };

  // Functions handling Airline Name

  // Storing the selected option
  const onInputChange = (e) => {
    setAirlineName(e.target.value);
  };

  // Handles all the checking
  const onButtonSubmit = () => {
    const matchingFlight = data.data.find(
      (flight) => flight.airline.name === airlineName
    );

    if (matchingFlight) {
      console.log("Match!");
      setFlightDeparture(matchingFlight.departure);
      setFlightArrival(matchingFlight.arrival);
    } else {
      console.log("No match");
    }
  };

  //Destructing variables to use them in jsx code

  const {
    airport: arrivalAirport,
    terminal: arrivalTerminal,
    scheduled: arrivalScheduled,
  } = flightArrival || {};
  const {
    airport: departureAirport,
    terminal: departureTerminal,
    scheduled: departureScheduled,
  } = flightDeparture || {};

  const {
    airport: newArrivalAirport,
    terminal: newArrivalTerminal,
    scheduled: newArrivalScheduled,
  } = newFlightArrival || {};

  const {
    airport: newDepartureAirport,
    terminal: newDepartureTerminal,
    scheduled: newDepartureScheduled,
  } = newFlightDeparture || {};

  // Formatting the Dates

  const options = {
    dateStyle: "short",
    timeStyle: "short",
    hour12: true,
    timeZone: "UTC",
  };
  const formattedDepartureDate = new Date(
    departureScheduled || newDepartureScheduled
  ).toLocaleString("en-US", options);

  const formattedArrivalDate = new Date(
    arrivalScheduled || newArrivalScheduled
  ).toLocaleString("en-US", options);

  // HTML/CSS

  return (
    <div className="image-container">
      <div className="main-container">
        <div>
          <h1 className="main-header">
            Explore The World <br />
            With Ease
          </h1>
          <button className="btn-1">Travel Guides</button>
        </div>

        <div className="travel-box">
          <div className="from-to-container">
            <div>
              <h1 className="center">Search</h1>
              <div className="airline-header">Airline Name</div>
              <select onChange={onInputChange}>
                {data &&
                  data.data.map((flights) => {
                    return (
                      <option key={flights.airline.name}>
                        {flights.airline.name}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="submit-btn-container">
            <button
              onClick={onButtonSubmit}
              className="submit-btn"
              type="submit"
              value="Search"
            >
              Submit
            </button>
          </div>

          <h1 className="airline-header">OR</h1>

          <div className="from-to-container">
            <div>
              <div className="airline-header">Departure Date</div>
              <select onChange={onInputChangeDeparture}>
                {data &&
                  data.data &&
                  data.data.map((flights) => {
                    return (
                      <option key={flights.airline.iata}>
                        {new Date(flights.departure.scheduled).toLocaleString(
                          "en-US",
                          options
                        )}
                      </option>
                    );
                  })}
              </select>
            </div>
          </div>
          <div className="submit-btn-container">
            <button
              onClick={onButtonSubmitDeparture}
              className="submit-btn"
              type="submit"
              value="Search"
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      {flightDeparture && flightArrival && (
        <div className="parent-info-container">
          <div className="info-container">
            <div className="format-container">
              <h1>Departure Airport: {departureAirport}</h1>
              <h1>Departure Terminal: {departureTerminal}</h1>
              <h1>Departure Date: {formattedDepartureDate}</h1>
            </div>
            <div className="arrival-container">
              <br />
              <br />
              <h1>Arrival Airport: {arrivalAirport}</h1>
              <h1>Arrival Terminal: {arrivalTerminal}</h1>
              <h1>Arrival Date: {formattedArrivalDate}</h1>
            </div>
          </div>
        </div>
      )}

      {newFlightDeparture && newFlightArrival && (
        <div className="parent-info-container">
          <div className="info-container">
            <div className="format-container">
              <h1>Departure Airport: {newDepartureAirport}</h1>
              <h1>Departure Terminal: {newDepartureTerminal}</h1>
              <h1>Departure Date: {formattedDepartureDate}</h1>
            </div>
            <div className="arrival-container">
              <br />
              <br />
              <h1>Arrival Airport: {newArrivalAirport}</h1>
              <h1>Arrival Terminal: {newArrivalTerminal}</h1>
              <h1>Arrival Date: {formattedArrivalDate}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flights;
