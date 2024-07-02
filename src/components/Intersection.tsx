import React, { useState } from 'react';
import './Intersection.css'

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
    <div className='vertical-line h-14 w-14 bg-yellow-600 content-center' onClick={onIntersectionClick}>
      <div className='hor-line text-4xl'> {stone}</div>

    </div>
  );
}