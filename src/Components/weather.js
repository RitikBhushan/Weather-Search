import React, { useEffect, useState } from "react";
import "./weather.css";

function Weather() {
  const [city, setCity] =useState(null);
  const [search, setSearch] =useState("Dhanbad");

  useEffect( () =>{

    const fetchApi =async ( ) =>{

      const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3146cf17efc2cf817f607231af9ef7af`
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    }

    fetchApi();

  },[search] )

  return (
    <>
      <div className="main_div">
        <div className="music_container">
          <h1 className="heading">
            <i>
              <b>

              Weather
              </b>
            </i>
          </h1>
          <div className="inputData">
            <input
              type="search"
              placeholder="City Name"
              className="inputFeild"
              onChange={(event) => {
                setSearch(event.target.value)
              }}
            />
          </div>

          {!city ? (
            <p> No Data Found</p>
          ) : (
            <>
            <div className="img_container">
            <h1 className="loaction">
              <i className="fas fa-street-view"></i>{search}
            </h1>
          </div>
          <div className="allTemp">
            <h2 className="temp">
              {city.temp}°Cel
            </h2>
            <h4 className="temmin_max">Min : {city.temp_max}°Cel | Max : {city.temp_max}°Cel</h4>
          </div>
            </>
          )}

          
        </div>
      </div>
    </>
  );
}

export default Weather;