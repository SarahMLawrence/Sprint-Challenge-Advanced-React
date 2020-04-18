import React from 'react';
import { render } from '@testing-library/react';
import PlayerCard from './components/PlayerCard';

test("renders PlayCard without crashing", () => {
  render(<PlayerCard />);
});

test("renders name on PlayCard component", async () =>{
  const { getByText } = render(<PlayerCard/>);
  const playName = getByText(/name/i);
  expect(playName).toBeInTheDocument();
});
