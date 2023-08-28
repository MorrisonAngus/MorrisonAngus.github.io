'use strict';

const { createElement, Component } = React;

class board extends Component {

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