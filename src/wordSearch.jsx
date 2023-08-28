'use strict';

const { createElement, Component } = React;


class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        grid: [
          ['W', 'E', 'L', 'A'],
          ['O', 'A', 'I', 'T'],
          ['R', 'R', 'N', 'X'],
          ['D', 'U', 'C', 'K'],
          ['S', 'H', 'S', 'G'],
        ],
        clickedCells: new Set(),
        isMouseDown: false,
        startRowIndex: null,
        startColIndex: null,
      };
      this.wordList = ['WORDS', 'DUCK', 'SUN', 'AT', 'IT'];
      this.foundWords =[];
    }

    /* Handel the mouse functions for click and drag */
    handleMouseDown = (rowIndex, colIndex) => {
        this.setState({
            isMouseDown: true,
            startRowIndex: rowIndex,
            startColIndex: colIndex,
        });
    };

    handleMouseUp = () => {
        this.setState({
          isMouseDown: false,
          startRowIndex: null,
          startColIndex: null,
        });
        const { clickedCells } = this.state;
        const selectedCells = Array.from(clickedCells).sort().join(',');
        const foundWord = this.checkSelectedCellsForWord(selectedCells);

        if (foundWord) {
            this.setState(prevState => ({
            foundWords: [...prevState.foundWords, foundWord],
            }));
        }
    };

    /* Deal with what happens to cells when they are clicked*/
    handleCellClick = (rowIndex, colIndex) => {
        if(this.state.isMouseDown) {
            this.handleCellSelection(rowIndex, colIndex);
        } else {
            this.setState({
                clickedCells: new Set([`${rowIndex}-${colIndex}`]),
                startRowIndex: rowIndex,
                startColIndex: colIndex,
            });
        }
    };

    handleCellSelection = (rowIndex, colIndex) => {
        const { startRowIndex, startColIndex, grid } = this.state;
        const newClickedCells = new Set();
    
        const rowStart = Math.min(startRowIndex, rowIndex);
        const rowEnd = Math.max(startRowIndex, rowIndex);
        const colStart = Math.min(startColIndex, colIndex);
        const colEnd = Math.max(startColIndex, colIndex);
        
        /* if the number of columns is greater then we only want to include those cells */
        if(colEnd-colStart > rowEnd-rowStart){
            for(let j = colStart; j<= colEnd; j++){
                newClickedCells.add(`${rowIndex}-${j}`);
            }
        /* if the number of rows changed is greater than the number of columns changed add the row cells */
        }else if(rowEnd-rowStart > colEnd-colStart){
            for(let j = rowStart; j<= rowEnd; j++){
                newClickedCells.add(`${j}-${colIndex}`);
            }
        /* they are equal and we want to add on the diagnal */
        }else{
            for (let i = rowStart; i <= rowEnd; i++) {
                for (let j = colStart; j <= colEnd; j++) {
                    if(i===j){
                        newClickedCells.add(`${i}-${j}`);
                    }
                }
              }
        }

    
        this.setState({
          clickedCells: newClickedCells,
        });
    };

    /* Deal with the word list */
    getFoundWords() {
        const { clickedCells } = this.state;
        const selectedCells = Array.from(clickedCells).sort().join(',');
        const foundWord = this.checkSelectedCellsForWord(selectedCells);
        return foundWord ? [foundWord, ...this.state.foundWords] : this.state.foundWords;
    }
    
    getRemainingWords() {
        return this.wordList.filter(word => !this.state.foundWords.includes(word));
    }

    checkSelectedCellsForWord(selectedCells) {
        const selectedCoordinates = selectedCells.split(',').map(cell => cell.split('-'));
        for (const word of this.wordList) {
          if (word.length === selectedCoordinates.length) {
            const wordFound = word.split('').every((letter, index) => {
              const [rowIndex, colIndex] = selectedCoordinates[index];
              return this.state.grid[rowIndex][colIndex] === letter;
            });
            if (wordFound) {
              return word;
            }
          }
        }
        return null;
    }
  


    render() {
        const { grid, clickedCells } = this.state;
        const remainingWords = this.wordList.filter(word => !this.state.foundWords.includes(word));
      
        return (
          <div className="board">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`cell ${
                      clickedCells.has(`${rowIndex}-${colIndex}`) ? 'clicked' : ''
                    }`}
                    onClick={() => this.handleCellClick(rowIndex, colIndex)}
                    onMouseDown={() => this.handleMouseDown(rowIndex, colIndex)}
                    onMouseEnter={() => {
                      if (this.state.isMouseDown) {
                        this.handleCellSelection(rowIndex, colIndex);
                      }
                    }}
                    onMouseUp={this.handleMouseUp}
                  >
                    {cell}
                  </div>
                ))}
              </div>
            ))}
            <div className="word-list">
              <h3>Word List</h3>
              <ul>
                {this.state.foundWords.map((word, index) => (
                  <li key={index} className="found-word">
                    <s>{word}</s>
                  </li>
                ))}
                {remainingWords.map((word, index) => (
                  <li key={index}>{word}</li>
                ))}
              </ul>
            </div>
          </div>
        );
    }
}

class Game extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const board = <Board />;

        return (
            <div>
                {board}
            </div>
        );
    }
}



const domContainer = document.querySelector('#React-game');
const boardElement = <Game />;
ReactDOM.render(boardElement, domContainer);