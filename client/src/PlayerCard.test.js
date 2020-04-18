import React from 'react';
import * as rtl from '@testing-library/react';
import PlayerCard from './components/PlayerCard';

test("renders PlayCard without crashing", () => {
  const PlayCard = rtl.render(<PlayerCard />);
});

it("renders", () =>{
  const player = rtl.render(<PlayerCard/>);
  player.getByText(/player/i);
  
});