import './Styles/CountryDetails.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const CountryDetails = () => {
  const { isLoading, country } = useSelector((state) => state.country);
  const countryDetails = country;
  if (isLoading) {
    return (
      <div className="details" data-testid="details-test">
        <div className="country-map">
          <img src={countryDetails.flag} alt="Country Map" />
        </div>
        <div className="country-headline">
          <h2>
            {countryDetails.commonName}
            {' / '}
            {countryDetails.cca2}
            <span>Details</span>
          </h2>
        </div>
        <div className="country-details">
          <div className="item">
            <h2>
              Common Name:
              <span>
                {' '}
                {countryDetails.commonName}
              </span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Official Name:
              <span>{countryDetails.officialName}</span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <div className="coatOfArms">
              <h2>
                Coat Of Arms:
              </h2>
              {countryDetails.coatOfArms ? <img src={countryDetails.coatOfArms} alt="Coat Of Arms" /> : ''}
            </div>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Capital:
              <span>{countryDetails.capital}</span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Language:
              <span>{countryDetails.language}</span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Time zone:
              <span>{countryDetails.timezone}</span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Currency:
              <span>
                {' '}
                {countryDetails.currency}
                {' / '}
                {countryDetails.currencySymbol}
              </span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Area:
              <span>
                {countryDetails.area}
                {' '}
                sq km
              </span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
          <div className="item">
            <h2>
              Population:
              <span>{countryDetails.population}</span>
            </h2>
            <HiOutlineArrowCircleRight className="icon1 txtwhite" />
          </div>
        </div>
      </div>
    );
  }
  return isLoading;
};

export default CountryDetails;
