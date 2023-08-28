'use strict';

const { useState } = require("react");

const Game = () => {
    const [grid, setGrid] = useState([
        ['W', 'O', 'R', 'D', 'S'],
        ['E', 'A', 'R', 'C', 'H'],
        ['L', 'I', 'N', 'E', 'S'],
        ['A', 'T', 'T', 'F', 'G'],
    ])

    const [selectedCells, setSelectedCells] = useState([]);
    const wordsToFind = ['WORD', 'SEARCH', 'LINES', 'AT'];

    const handleCellClisk = (row, col) => {
        const newSelectedCells =[...selectedCells, {row, col}];
        setSelectedCells(newSelectedCells);
    }

    return (
        <div>
          <h1>Word Search Game</h1>
          <div className="grid-container">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`cell ${selectedCells.some(cell => cell.row === rowIndex && cell.col === colIndex) ? 'selected' : ''}`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <h2>Words to Find:</h2>
          <ul>
            {wordsToFind.map((word, index) => (
              <li key={index}>{word}</li>
            ))}
          </ul>
        </div>
    );
};



const domContainer = document.querySelector('#React-game');
const boardElement = <Game />;
ReactDOM.render(boardElement, domContainer);