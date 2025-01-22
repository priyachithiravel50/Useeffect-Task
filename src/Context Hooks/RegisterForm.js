import React, { useState, useContext, createContext } from "react";

// 1. Context Create Pannudhu (Location Context)
const LocationContext = createContext();

const App = () => {
  // 2. Location Provider
  const LocationProvider = ({ children }) => {
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Sample data for states and cities based on countries
    const locations = {
      India: {
        states: {
          "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Dindugal" , "Nagapattinam" ,"Thanjavur","Thiruvarur"],
          Kerala: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Wayanad" , "Alapula"],
        },
      },
      Australia: {
        states: {
          "New South Wales": ["Sydney", "Newcastle","Brisbane" ,"Canberra", "Perth" ],
          Victoria: ["Melbourne", "Geelong" ,"Ballarat","Bendigo","shepparaton","Wangaratta"],
        },
      },
      USA: {
        states: {
          California: ["Los Angeles", "San Francisco" , "Santa Monica" ,"Pasadena" ,"Glendale" , "Long Beach"],
          Texas: ["Dallas", "Houston" , "Austin","Ford Worth" ,"EI Paso" ,"Santa Antonio"],
        },
      },
    };

    // Get states and cities based on selected country
    const getStatesAndCities = (selectedCountry) => {
      return locations[selectedCountry] || { states: {}, cities: [] };
    };

    const { states = {}, cities = [] } = getStatesAndCities(country);

    return (
      <LocationContext.Provider
        value={{
          country,
          setCountry,
          state,
          setState,
          city,
          setCity,
          states,
          cities,
          name,
          setName,
          email,
          setEmail,
          password,
          setPassword,
        }}
      >
        {children}
      </LocationContext.Provider>
    );
  };

  // 3. RegisterForm Component
  const RegisterForm = () => {
    const {
      country,
      setCountry,
      state,
      setState,
      city,
      setCity,
      states,
      cities,
      name,
      setName,
      email,
      setEmail,
      password,
      setPassword,
    } = useContext(LocationContext);

    const handleCountryChange = (e) => {
      const selectedCountry = e.target.value;
      setCountry(selectedCountry); // Update selected country
      setState(""); // Reset state and city when country changes
      setCity("");  // Keep the city state reset until a state is selected.
    };

    const handleStateChange = (e) => {
      const selectedState = e.target.value;
      setState(selectedState); // Update selected state
      setCity("");  // Reset city until the state is chosen.
    };

    const handleCityChange = (e) => {
      setCity(e.target.value); // Update selected city
    };

    return (
      <form>
        <h2>Register Form</h2>

        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {/* Password Input */}
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>

        {/* Country Dropdown */}
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <select
            id="country"
            className="form-control"
            value={country}
            onChange={handleCountryChange}
          >
            <option value="" disabled>
              Select Country
            </option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="USA">USA</option>
          </select>
        </div>

        {/* State Dropdown (always shown, but disabled until country is selected) */}
        <div className="form-group">
          <label htmlFor="state">State:</label>
          <select
            id="state"
            className="form-control"
            value={state}
            onChange={handleStateChange}
            selected={!country}  // Disable until a country is selected
          >
            <option value="" disabled>
              Select State
            </option>
            {Object.keys(states).map((stateOption, index) => (
              <option key={index} value={stateOption}>
                {stateOption}
              </option>
            ))}
          </select>
        </div>

        {/* City Dropdown (always shown, but disabled until state is selected) */}
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <select
            id="city"
            className="form-control"
            value={city}
            onChange={handleCityChange}
            selected={!state}  // Disable until a state is selected
          >
            <option value="" disabled>
              Select City
            </option>
            {states[state]?.map((cityOption, index) => (
              <option key={index} value={cityOption}>
                {cityOption}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    );
  };

  return (
    <LocationProvider>
      <div className="container">
        <RegisterForm />
      </div>
    </LocationProvider>
  );
};

export default App;
