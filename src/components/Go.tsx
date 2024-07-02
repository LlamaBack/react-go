import React, { useState, useEffect} from "react";
import Board from "./Board"

const PLAYER_BLACK = 1;
const PLAYER_WHITE = 2;
const n = 9;

function checkWinner(playerTurn, setPlayerTurn) {
    if (playerTurn === PLAYER_BLACK) {
      setPlayerTurn(PLAYER_WHITE);
    } else {
      setPlayerTurn(PLAYER_BLACK);
    }
  }

function stoneLiberties(coord, board) {
  //stone = [0,0]
  //board = [[1,2,0],
  //         [0,0,0],
  //         [0,0,0]]
}

function stoneNeighbors(coord) {
  let neighbors = [[coord[0] - 1, coord[1]], //left neighbor
                   [coord[0] + 1, coord[1]], //right neighbor
                   [coord[0], coord[1] - 1], //bottom neighbor
                   [coord[0], coord[1] + 1]]; //top neighbor
  neighbors = neighbors.filter((neighbor) => ((neighbor[0] > -1 && neighbor[0] < n) && (neighbor[1] > -1 && neighbor[1] < n)))
  console.log(neighbors);
  return neighbors
}

const Go = ()  => {
  const [playerTurn, setPlayerTurn] = useState(PLAYER_BLACK);
  const [coord, setCoord] = useState([0,0]);
  const [intersections, setIntersections] = useState((Array(n)).fill(null).map(() => Array(n).fill(null)));

  const handleIntersectionClick = (index) => {
    if(intersections[index[0]][index[1]] !== null) {
      return;
    }
    var newIntersections = JSON.parse(JSON.stringify(intersections));
    newIntersections[index[0]][index[1]] = playerTurn;
    setIntersections(newIntersections);
  };

  useEffect(() => {
    checkWinner(playerTurn, setPlayerTurn);
    stoneNeighbors([8,0])
  }, [intersections]);

  return (
    <div>
      Hello This is the game of Go
      <div> <Board playerTurn={playerTurn} intersections={intersections} onIntersectionClick={handleIntersectionClick}/> </div>
    </div>
  );
}

export default Go;