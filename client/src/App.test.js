import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PlayerCard from './components/PlayerCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('displays name', () => {
  const h3 = document.createElement('h3');
  ReactDOM.render(<PlayerCard />, h3);
  ReactDOM.unmountComponentAtNode(h3);
})