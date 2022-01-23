import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Weather Search Engine</h1>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" />
          </div>
        </div>
      </form>
      <ul>
        <li>Date</li>
        <li>Weather</li>
      </ul>
      <div className="row">
        <div className="col-6">6C</div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humdity</li>
            <li>Wind</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
