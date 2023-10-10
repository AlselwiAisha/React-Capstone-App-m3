import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const CountryDetails = () => {
  const { isLoading, country } = useSelector((state) => state.country);
  const countryDetails = country;
  if (isLoading) {
    return (
      <div className="details">
        <div className="country-map">
          <img src={countryDetails.flag} alt="Country Map" />
        </div>
        <div className="headline">
          <h2>
            {countryDetails.continent}
            /
            {countryDetails.commonName}
            {' '}
            Details
          </h2>
        </div>
        <div className="country-details">
          <div className="item">
            <h2>
              Common Name:
              {countryDetails.commonName}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Official Name:
              {countryDetails.officialName}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Coat Of Arms:
            </h2>
            <img className="coatOfArms" src={countryDetails.coatOfArms} alt="Coat Of Arms" />
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Capital:
              {countryDetails.capital}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Language:
              {countryDetails.language}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Time zone:
              {countryDetails.timezone}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Currency:
              {countryDetails.currency}
              {' / '}
              {countryDetails.currencySymbol}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Area:
              {countryDetails.area}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
          <div className="item">
            <h2>
              Population:
              {countryDetails.population}
            </h2>
            <HiOutlineArrowCircleRight />
          </div>
        </div>
      </div>
    );
  }
  return isLoading;
};

export default CountryDetails;
