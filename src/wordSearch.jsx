'use strict';

const { createElement, Component } = React;


class Board extends Component {
    constructor(props) {
      super(props);
      this.state = {
        grid: [
          ['W', 'E', 'L', 'A'],
          ['O', 'A', 'I', 'T'],
          ['R', 'R', 'N', 'T'],
          ['D', 'U', 'C', 'K'],
          ['S', 'H', 'S', 'G'],
        ],
        clickedCells: new Set(),
        isMouseDown: false,
        startRowIndex: null,
        startColIndex: null,
      };
    }
  
    handleCellClick = (rowIndex, colIndex) => {
      if (this.state.isMouseDown) {
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
  
      for (let i = rowStart; i <= rowEnd; i++) {
        for (let j = colStart; j <= colEnd; j++) {
          newClickedCells.add(`${i}-${j}`);
        }
      }
  
      this.setState({
        clickedCells: newClickedCells,
      });
    };
  
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
    };
  
    render() {
      const { grid, clickedCells } = this.state;
  
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
        </div>
      );
    }
  }


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boardKey: 0, // Use this as a way to reset the board easily
        };
    }

    resetBoard() {
        this.setState({ boardKey: this.state.boardKey + 1 });
    }

    render() {
        const board = <Board key={this.state.boardKey} />;
        const resetButton = <button onClick={() => this.resetBoard()}>Reset</button>;

        return (
            <div>
                {board}
                {resetButton}
            </div>
        );
    }
}



const domContainer = document.querySelector('#React-game');
const boardElement = <Game />;
ReactDOM.render(boardElement, domContainer);