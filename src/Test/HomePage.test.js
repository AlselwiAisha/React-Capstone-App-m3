import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../components/HomePage';
import store from '../Redux/Store';
import '@testing-library/jest-dom';

it('Check if the component has changed', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if the component container is there', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>,
  );
  const container = screen.getByText('loading...');
  expect(container).toBeInTheDocument();
});
