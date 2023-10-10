import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Countries from './Countries';
import { getCountriesData } from '../Redux/Countries/CountriesSlice';

const HomePage = () => {
  const { isLoading, error, countries } = useSelector((state) => state.countries);
  const [countriesData, setCountriesData] = useState(countries);
  const [selected, setSelected] = useState();
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
    } else {
      setCountriesData(countries.filter((country) => country.region === e.target.value));
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
    <>
      <div>
        <h2>State by name</h2>
        <input onChange={filterCountries2} type="text" />
      </div>
      <div className="headline">
        <h2>State by region</h2>
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
      <div className="countries-data">
        <Countries countries={countriesData || countries} />

      </div>
    </>
  );
};

export default HomePage;
