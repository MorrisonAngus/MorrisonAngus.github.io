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
      };
    }
  
    render() {
      const { grid } = this.state;
  
      return (
        <div className="board">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <div key={colIndex} className="cell">
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