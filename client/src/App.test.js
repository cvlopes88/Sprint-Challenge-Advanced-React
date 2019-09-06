import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';


test('App renders without crashing', () => {
  render(<App />);
});


test('display components in app', done => {
  const { getByTestId } = render (<App />)
  getByTestId('display-nav');
  
done();
});


test('display components in app', done => {
  const { getByTestId } = render (<App />)
  getByTestId('display-card');
  
done();
})

