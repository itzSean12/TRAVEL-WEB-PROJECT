import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Discover from "./components/Discover";
import Flights from "./components/Flights";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";

function App() {
  const [ticketCount, setTicketCount] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [getId, setGetId] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const loadUser = (user) => {
    setUser({ name: user.name, email: user.email });
  };

  useEffect(() => {
    if (isLoggedIn) {
      fetch(`http://localhost:3000/flights/${getId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length > 0) {
            setCartCount(data[0].count);
          }
        })
        .catch((error) => console.error(error));
    }
  }, [isLoggedIn, getId]);

  return (
    <div>
      <Router>
        {isLoggedIn === false ? (
          <>
            <SignUp
              setGetId={setGetId}
              loadUser={loadUser}
              setIsLoggedIn={setIsLoggedIn}
            />
            <SignIn
              setGetId={setGetId}
              loadUser={loadUser}
              setIsLoggedIn={setIsLoggedIn}
            />
          </>
        ) : (
          <>
            <Navbar cartCount={cartCount} ticketCount={ticketCount} />
            <Routes>
              <Route path="/" element={<Home user={user} />} />
              <Route path="/about" element={<About />} />
              <Route path="/discover" element={<Discover />} />
              <Route
                path="/flights"
                element={
                  <Flights
                    setCartCount={setCartCount}
                    getId={getId}
                    ticketCount={ticketCount}
                    setTicketCount={setTicketCount}
                  />
                }
              />
              <Route
                path="/cart"
                element={
                  <Cart
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                    getId={getId}
                  />
                }
              />
            </Routes>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
