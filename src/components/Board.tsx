import React from 'react';
import Intersection from './Intersection'

const n = 9;

export default function Board({playerTurn, intersections, onIntersectionClick}) {

  return(
    <div
      className={`w-max bg-white grid grid-cols-9 grid-rows-9`}
    >
      {intersections.map((rows, x) => (
          rows.map((intersection, y) => (
            <Intersection playerTurn={playerTurn} 
            onIntersectionClick={()=> onIntersectionClick([x,y])}
            value={intersections[x][y]}/>
          ))
        ))
        }
    </div>
  );
}