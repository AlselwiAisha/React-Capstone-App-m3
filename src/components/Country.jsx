import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';
import { getCountry } from '../Redux/CountryDetails/CountryDetailsSlice';

const Country = ({
  id,
  commonName,
  region,
  cca2,
  flag,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="country-card" key={id} data-testid="country-test">
      <div className="country-flag">
        <img src={flag.png} alt="Country Flag" />
      </div>
      <div className="country-info txtwhite">
        <h2 className="country-name">
          {commonName }
          {' / '}
          {cca2}
        </h2>
        <div>
          <p>
            Continent:
            {region}
          </p>
        </div>
      </div>
      <div className="details-btn">
        <Link to={`/country/${cca2}`} onClick={() => dispatch(getCountry(commonName))}>
          <HiOutlineArrowCircleRight className="txtwhite" />
        </Link>
      </div>
    </div>
  );
};

Country.propTypes = {
  id: PropTypes.string.isRequired,
  commonName: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  cca2: PropTypes.string.isRequired,
};

export default Country;
