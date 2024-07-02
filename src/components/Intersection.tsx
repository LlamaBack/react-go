import React, { useState } from 'react';

// const PLAYER_BLACK = 1;
// const PLAYER_WHITE = 2;

export default function Intersection({playerTurn, onIntersectionClick, value}) {

  // const [stone, setStone] = useState("⃝");

  let stone = "⃝"

  if (value !== null) {
    if (value === 2) {
      stone = "⚫️"
    } else if (value === 1) {
      stone = "⚪️"
    }
  }



  return(
    <div className='h-14 w-14 bg-slate-600 border-2 content-center' onClick={onIntersectionClick}>
      {stone}
    </div>
  );
}