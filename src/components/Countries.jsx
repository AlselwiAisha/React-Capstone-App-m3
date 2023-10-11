import './Styles/Countries.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import Country from './Country';

const Countries = ({ countries }) => (
  <div className="countries">
    {countries.map((country) => (
      <Country
        id={uuidv4()}
        key={country.id}
        commonName={country.commonName}
        region={country.region}
        cca2={country.cca2}
        flag={country.flag}
      />
    ))}
  </div>
);
Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.any.isRequired).isRequired,
};
export default Countries;
