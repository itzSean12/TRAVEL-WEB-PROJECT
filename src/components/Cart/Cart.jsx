import React, { useState, useEffect } from "react";

const Cart = ({ getId, setCartCount, cartCount }) => {
  const [flights, setFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // add isLoading state

  useEffect(() => {
    fetch(`http://localhost:3000/flights/${getId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          setCartCount(data[0].count);
          setFlights(data);
          setIsLoading(false);
        } else {
          console.error("No flights found.");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  const clearShoppingCart = () => {
    fetch(`http://localhost:3000/flights/${getId}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("All flights have been deleted.");
          setCartCount(0);
          setFlights([]); // clear flights state on successful delete
        } else {
          console.error("Failed to delete flights.");
        }
      })
      .catch((error) => console.error(error));
  };

  if (isLoading) {
    return <div>Cart is Empty</div>; // show loading indicator while flights are fetched
  }

  if (flights.length === 0) {
    return <div>No flights in cart.</div>; // show message if no flights in cart
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      {flights.map((flight) => (
        <div key={flight._id}>
          <h1>Departure</h1>
          <p>Departure Airport: {flight.departure.airport}</p>
          <p>Departure Terminal: {flight.departure.terminal}</p>
          <p>Departure Date: {flight.departure.scheduled}</p>
          <h1>Arrival</h1>
          <p>Arrival Airport: {flight.arrival.airport}</p>
          <p>Arrival Terminal: {flight.arrival.terminal}</p>
          <p>Arrival Date: {flight.arrival.scheduled}</p>
          <p>Total Price: {flight.price * flight.count}</p>
          {cartCount > 1 ? (
            <div>{flight.count} Tickets</div>
          ) : (
            <div>{flight.count} Ticket</div>
          )}
          <button>Checkout</button>
        </div>
      ))}

      <button onClick={clearShoppingCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
