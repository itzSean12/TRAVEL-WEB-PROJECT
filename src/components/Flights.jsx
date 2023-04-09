import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Flights.css";

const Flights = ({ ticketCount, setTicketCount, getId, setCartCount }) => {
  const [data, setData] = useState();
  const [airlineName, setAirlineName] = useState("");
  const [flightDeparture, setFlightDeparture] = useState(null);
  const [flightArrival, setFlightArrival] = useState(null);
  const [newFlightDeparture, setNewFlightDeparture] = useState(null);
  const [newFlightArrival, setNewFlightArrival] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [airlinePrice, setAirlineNamePrice] = useState(null);
  const [departurePrice, setDepartureNamePrice] = useState(null);
  const [finalAmount, setFinalAmount] = useState(0);
  const navigate = useNavigate();

  //Unused API 3e40dc3306858f98f92c1a89ae6d47ae

  useEffect(() => {
    const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
    const params = new URLSearchParams({
      access_key: "372f1976a7f3b8939d429e5b42049573",
      limit: 10,
    });
    fetch(`http://api.aviationstack.com/v1/flights?${params}`)
      .then((res) => res.json())
      .then((json) => {
        const flightsWithPrices = (json.data || []).map((flight, index) => {
          return {
            ...flight,
            prices: {
              usd: prices[index],
            },
          };
        });
        setData({ ...json, data: flightsWithPrices });
      });
  }, []);

  //Checking by Departure Date

  // useEffect(() => {
  //   const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  //   const params = new URLSearchParams({
  //     access_key: "372f1976a7f3b8939d429e5b42049573",
  //     limit: 3,
  //   });
  //   fetch(`http://api.aviationstack.com/v1/flights?${params}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       if (json.data) {
  //         const flightsWithPrices = json.data.map((flight, index) => {
  //           return {
  //             ...flight,
  //             prices: {
  //               usd: prices[index],
  //             },
  //           };
  //         });
  //         setData({ ...json, data: flightsWithPrices });
  //       } else {
  //         setData(json);
  //       }
  //     });
  // }, []);

  // useEffect(() => {
  //   const prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  //   const params = new URLSearchParams({
  //     access_key: "372f1976a7f3b8939d429e5b42049573",
  //     limit: 10,
  //   });
  //   fetch(`http://api.aviationstack.com/v1/flights?${params}`)
  //     .then((res) => res.json())
  //     .then((json) => {
  //       const flightsWithPrices = json.data.map((flight, index) => {
  //         return {
  //           ...flight,
  //           prices: {
  //             usd: prices[index],
  //           },
  //         };
  //       });
  //       setData({ ...json, data: flightsWithPrices });
  //     });
  // }, []);

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
      setDepartureNamePrice(matchingDepartureDate.prices.usd);
    } else {
      console.log("No match");
    }
  };

  //
  //
  //
  //Checking By Airline Name

  // Storing the selected option
  const onInputChange = (e) => {
    setAirlineName(e.target.value);
  };

  const onButtonSubmit = () => {
    const matchingFlight = data.data.find(
      (flight) => flight.airline.name === airlineName
    );

    if (matchingFlight) {
      console.log("Match!");
      setFlightDeparture(matchingFlight.departure);
      setFlightArrival(matchingFlight.arrival);
      setAirlineNamePrice(matchingFlight.prices.usd);
    } else {
      console.log("No match");
    }
  };

  const sendPurchase = () => {
    fetch("http://localhost:3000/addflight", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: getId,
        departure: flightDeparture,
        arrival: flightArrival,
        price: airlinePrice,
        count: ticketCount,
      }),
    });
    setCartCount(ticketCount);
    setFinalAmount(0);
    navigate("/cart");
    setTicketCount(0);
  };

  const sendDeparturePurchase = () => {
    fetch("http://localhost:3000/addflight", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: getId,
        departure: newFlightDeparture,
        arrival: newFlightArrival,
        price: departurePrice,
        count: ticketCount,
      }),
    });
    setTicketCount(0);
    setFinalAmount(0);
    navigate("/cart");
  };

  const handleIncrementAirline = () => {
    setTicketCount(ticketCount + 1);
    setFinalAmount(finalAmount + airlinePrice);
  };

  const handleDecrementAirline = () => {
    if (ticketCount < 1) {
      return;
    } else {
      setTicketCount(ticketCount - 1);
      setFinalAmount(finalAmount - airlinePrice);
    }
  };

  const handleIncrementDeparture = () => {
    setTicketCount(ticketCount + 1);
    setFinalAmount(finalAmount + departurePrice);
  };

  const handleDecrementDeparture = () => {
    if (ticketCount < 1) {
      return;
    } else {
      setTicketCount(ticketCount - 1);
      setFinalAmount(finalAmount - departurePrice);
    }
  };

  //Destructing variables to use them in jsx code

  //Search by AirlineName
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

  // Search by Departure

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
                      <option key={flights.flight.icao}>
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
                      <option key={flights.flight.icao}>
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

      {flightDeparture && flightArrival && airlinePrice && (
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
            <h1>Price: {airlinePrice}</h1>
            <div className="purchase-btn-container">
              <button onClick={handleDecrementAirline} className="purchase-btn">
                -
              </button>
              <h1 className="purchase-header">{ticketCount}</h1>
              <button onClick={handleIncrementAirline} className="purchase-btn">
                +
              </button>
            </div>
            <div className="center">
              <h1>Final Amount: {finalAmount} </h1>
              <button onClick={sendPurchase}>Buy Now!</button>
            </div>
          </div>
        </div>
      )}

      {newFlightDeparture && newFlightArrival && departurePrice && (
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
            <h1>Price: {departurePrice}</h1>
            <div className="purchase-btn-container">
              <button
                onClick={handleDecrementDeparture}
                className="purchase-btn"
              >
                -
              </button>
              <h1 className="purchase-header">{ticketCount}</h1>
              <button
                onClick={handleIncrementDeparture}
                className="purchase-btn"
              >
                +
              </button>
            </div>
            <div className="center">
              <h1>Final Amount: {finalAmount} </h1>
              <button onClick={sendDeparturePurchase}>Buy Now!</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Flights;

// NEXT UP, creating function when you submit to RESET the count and final AMOUNT
//After, Create the shopping cart Page
