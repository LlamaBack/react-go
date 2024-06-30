import React from 'react';

const n = 9;

export default function Board() {
  let board = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      board.push(
        <div className='flex text-black w-12 h-12 bg-slate-500 border-black border-2' contentEditable="true" spellCheck="true">
          [{i}{j}]
        </div>
      );
    }
  };

  return(
    <div
      className='w-max bg-white grid grid-cols-9 grid-rows-9'
    >
      {board}
    </div>
  );
}