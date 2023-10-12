import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Country from '../components/Country';
import store from '../Redux/Store';
import '@testing-library/jest-dom';

const country = {
  id: '1',
  commonName: 'Yemen',
  region: 'Asia',
  cca2: 'YE',
  flag: {
    png: 'https://restcountries.eu/data/afg.png',
  },

};
it('Check if Item component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <Country
          id={country.id}
          commonName={country.commonName}
          region={country.region}
          cca2={country.cca2}
          flag={country.flag.png}
        />
        ,
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the component container is there', async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Country
          id={country.id}
          commonName={country.commonName}
          region={country.region}
          cca2={country.cca2}
          flag={country.flag.png}
        />
      </BrowserRouter>
    </Provider>,
  );
  const container = await screen.findByTestId('country-test');
  expect(container).toBeInTheDocument();
});
