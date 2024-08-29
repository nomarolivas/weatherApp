import React, {useState} from "react";
import axios from 'axios'


  function App() {

  //const url= 'https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=5e73cb2a276e2ee3fae5b79f06a8c105'


  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
              <p>Dallas</p>
            </div>
            <div className="temp">
              <h1>69°F</h1>
            </div>
            <div className="description">
              <p>Clouds</p>
            </div>
          </div>
        <div className="bottom">
          <div className="feels">
            <p>65°F</p>
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            12 MPH

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
