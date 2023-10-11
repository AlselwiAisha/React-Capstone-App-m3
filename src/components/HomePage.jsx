import './Styles/HomePage.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countries from './Countries';
import { getCountriesData } from '../Redux/Countries/CountriesSlice';
import world from '../images/World.svg';
import Africa from '../images/Africa.svg';
import Americas from '../images/Americas.svg';
import Asia from '../images/Asia.svg';
import Europe from '../images/Europe.svg';
import Oceania from '../images/Oceania.svg';

const HomePage = () => {
  const { isLoading, error, countries } = useSelector((state) => state.countries);
  const [countriesData, setCountriesData] = useState(countries);
  const [selected, setSelected] = useState();
  const [map, setMap] = useState(world);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading) {
      dispatch(getCountriesData());
      setCountriesData(null);
    }
  }, [dispatch, isLoading]);

  const filterCountries = (e) => {
    setSelected(e.target.value);
    if (e.target.value === 'All') {
      setCountriesData(countries);
      setMap(world);
    } else {
      setCountriesData(countries.filter((country) => country.region === e.target.value));
      switch (e.target.value) {
        case 'Asia':
          setMap(Asia);
          return;
        case 'Europe':
          setMap(Europe);
          return;
        case 'Africa':
          setMap(Africa);
          return;
        case 'Americas':
          setMap(Americas);
          return;
        case 'Oceania':
          setMap(Oceania);
          return;
        default:
          setMap(world);
      }
    }
  };
  const filterCountries2 = (e) => {
    setCountriesData(countries.filter(
      (country) => country.commonName.toLowerCase().includes(e.target.value.toLowerCase()),
    ));
  };

  if (!isLoading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div style={{ color: 'red' }}>There is an error...!</div>;
  }
  return (
    <div className="home-container main-color" data-testid="home-test">
      <div className="world-map blue-color txtwhite">
        <div className="map">
          <img src={map} alt="World Map" />
        </div>
        <div className="map-info">
          <h2>
            {selected || 'World'}
            {' '}
            Map
          </h2>
          <p>
            {countriesData ? countriesData.length : countries.length}
            {' '}
            Countries
          </p>
        </div>
      </div>
      <div className="headline txtwhite">
        <div className="stat-txt">
          <h2 className="txtWhite">Search by Name: </h2>

          <input onChange={filterCountries2} type="text" />
        </div>
        <div className="stat-txt">
          <h2 className="txtWhite">Search by Region: </h2>
          {' '}
          <select
            type="text"
            value={selected}
            onChange={filterCountries}
            className="button"
          >
            <option value="All">All</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries-data">
        <Countries countries={countriesData || countries} />

      </div>
    </div>
  );
};

export default HomePage;
