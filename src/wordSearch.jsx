'use strict';

const { createElement, Component } = React;


class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        grid: [ /* Static grid for now */
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
        foundWords: [],
      };
      this.wordList = ['WORDS', 'DUCK', 'SUN', 'EAR', 'AT', 'IT'];
      

      this.handleMouseDown = this.handleMouseDown.bind(this);
      this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    /* Handel the mouse functions for click and drag */
    handleMouseDown = (rowIndex, colIndex) => {
      // Update the states to mark that the mouse has been clicked
      this.setState({
          isMouseDown: true,
          startRowIndex: rowIndex,
          startColIndex: colIndex,
      });
    };

    handleMouseUp = () => {
      // Update the states to set the mouse back to being up
      this.setState({
          isMouseDown: false,
          startRowIndex: null,
          startColIndex: null,
      });
      
      // Get the clicked cells and the foundWords list from the objects state
      const { clickedCells, foundWords } = this.state;
      const selectedCells = Array.from(clickedCells).sort().join(',');
      // Check to see if there is a word in the selectedCells. If not then this will be null
      let foundWord = this.checkSelectedCellsForWord(selectedCells);

      
      // if there is a found word 
      if (foundWord) {
        // Check if the word is not in the wordList
        if (!this.wordList.includes(foundWord)) {
          // If it is not then reverse it
          foundWord = foundWord.split('').reverse().join('');
        }

        //console.log("Found a word: ", foundWord); // Used for debugging
        const updatedFoundWords = [...foundWords, foundWord]; // Add the new word to the foundWords list
        this.setState({
            foundWords: updatedFoundWords, // Update the state of the object
        });
      }
  };

    /* Deal with what happens to cells when they are clicked*/
    handleCellClick = (rowIndex, colIndex) => {
        if(this.state.isMouseDown) { // If this is a drag to select multiple cells
            this.handleCellSelection(rowIndex, colIndex); // Just add the new cell to the cell list
        } else {
          // This is the first cell being selcted
          this.setState({
            // Create a new cell list and add the clicked cell to it using the row and col index to create a key
            clickedCells: new Set([`${rowIndex}-${colIndex}`]),
            startRowIndex: rowIndex,
            startColIndex: colIndex,
          });
        }
    };

    handleCellSelection = (rowIndex, colIndex) => {
      const { startRowIndex, startColIndex} = this.state;
      const newClickedCells = new Set();
    
      const rowStart = Math.min(startRowIndex, rowIndex);
      const rowEnd = Math.max(startRowIndex, rowIndex);
      const colStart = Math.min(startColIndex, colIndex);
      const colEnd = Math.max(startColIndex, colIndex);
      
      /* if the number of columns is greater then the number of rows we only want to include the cells in the column */
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
                  if(Math.abs(i - rowIndex) === Math.abs(j - colIndex)){
                      newClickedCells.add(`${i}-${j}`);
                  }
              }
            }
      }

      // Update the state with the new clicked cells array
      this.setState({
        clickedCells: newClickedCells,
      });
    };

    /* Deal with the word list */
    getFoundWords() {
      return this.state.foundWords;
    }
  
    getRemainingWords() {
      return this.wordList.filter(word => !this.state.foundWords.includes(word));
    }

    checkSelectedCellsForWord(selectedCells) {
      const selectedCoordinates = selectedCells.split(',').map(cell => cell.split('-'));
  
      const selectedCellIndices = selectedCoordinates.map(([rowIndex, colIndex]) => [Number(rowIndex), Number(colIndex)]);
      const selectedWord = selectedCellIndices.map(([rowIndex, colIndex]) => this.state.grid[rowIndex][colIndex]).join('');
  
      const reversedSelectedWord = selectedWord.split('').reverse().join('');
      
      // Check if the word is in the list or if the reverse of the word found is in the list
      // we need to check the reverse incase the word is displayed R->L not L->R
      if (this.wordList.includes(selectedWord) || this.wordList.includes(reversedSelectedWord)) {
          return selectedWord;
      }
      
      // If the word or its reverse are not in the list then we retrun null indicating that no word was found
      return null;
    }
  

    /* Render the board with the word lists being displayed */
    render() {
        const { grid, clickedCells } = this.state;
        const remainingWords = this.getRemainingWords();
      
        return (
          <div className="board">
            {grid.map((row, rowIndex) => (
              <div key={rowIndex} className="row">
                {row.map((cell, colIndex) => (
                  <div
                    key={colIndex}
                    className={`cell ${
                      clickedCells.has(`${rowIndex}-${colIndex}`) ? 'clicked' : '' // This is used to define the CSS style for when a cell gets clicked
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