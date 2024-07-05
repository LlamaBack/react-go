import { useState, useEffect } from "react";
import Board from "./Board";

const PLAYER_BLACK = 1;
const PLAYER_WHITE = 2;
const n = 9;

const Go = () => {
  const [playerTurn, setPlayerTurn] = useState(PLAYER_BLACK);
  const [intersections, setIntersections] = useState(
    Array(n)
      .fill(null)
      .map(() => Array(n).fill(null))
  );

  function checkWinner(playerTurn: number) {
    if (playerTurn === PLAYER_BLACK) {
      setPlayerTurn(PLAYER_WHITE);
    } else {
      setPlayerTurn(PLAYER_BLACK);
    }
  }

  function stoneLiberties(coord: number[], intersections: number[][]) {
    var neighbors = stoneNeighbors(coord);
    neighbors = neighbors.filter(
      (neighbor) => intersections[neighbor[0]][neighbor[1]] === null
    );
    return neighbors;
  }

  function stoneNeighbors(coord: number[]) {
    let neighbors = [
      [coord[0] - 1, coord[1]], //left neighbor
      [coord[0] + 1, coord[1]], //right neighbor
      [coord[0], coord[1] - 1], //bottom neighbor
      [coord[0], coord[1] + 1], //top neighbor
    ];

    neighbors = neighbors.filter(
      (neighbor) =>
        neighbor[0] >= 0 &&
        neighbor[0] < n &&
        neighbor[1] >= 0 &&
        neighbor[1] < n
    );

    return neighbors;
  }

  function findGroup(coord: number[], updatedIntersections: number[][]) {
    var color = updatedIntersections[coord[0]][coord[1]];
    if (color === null) {
      return {
        liberties: 1,
        stones: [],
      };
    }

    var visited = {};
    var visited_list = [];
    var queue = [[coord[0], coord[1]]];
    var count = 0;

    while (queue.length > 0) {
      var stone: number[] = queue.pop();

      if (visited[stone]) {
        continue;
      }

      if (stone === null) {
        continue;
      }

      var neighbors = stoneNeighbors([stone[0], stone[1]]);

      neighbors.map((neighbor) => {
        var state = updatedIntersections[neighbor[0]][neighbor[1]];

        if (state === null) {
          count++;
        }
        if (state === color) {
          // queue.push(updatedIntersections[neighbor[0]][neighbor[1]]);
          queue.push([neighbor[0], neighbor[1]]);
          // console.log([[neighbor[0]],[neighbor[1]]]);
        }
      });
      visited[stone] = true;
      visited_list.push(stone);
    }
    // console.log(visited_list);

    return {
      liberties: count,
      stones: visited_list || "",
    };
  }

  const handleIntersectionClick = (index: number[]) => {
    if (intersections[index[0]][index[1]] !== null) {
      return;
    }
    var newIntersections = JSON.parse(JSON.stringify(intersections));
    newIntersections[index[0]][index[1]] = playerTurn;

    stoneNeighbors(index).map((neighbor) => {
      var neighborGroup = findGroup(neighbor, newIntersections);

      if (neighborGroup["liberties"] === 0) {
        neighborGroup["stones"].map((stone) => {
          if (stone) {
            // console.log(newIntersections);
            // console.log(stone);
            if (newIntersections[stone[0]][stone[1]] !== null) {
              newIntersections[stone[0]][stone[1]] = null;
            }
          }
        });
      }
    });

    setIntersections(newIntersections);
  };

  useEffect(() => {
    checkWinner(playerTurn);
  }, [intersections]);

  return (
    <div>
      Hello This is the game of Go
      <div>
        <Board
          playerTurn={playerTurn}
          intersections={intersections}
          onIntersectionClick={handleIntersectionClick}
        />
      </div>
    </div>
  );
};

export default Go;
