'use strict';

const { createElement, Component } = React;
let player_turn = 'X';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            hasBeenClicked: false,
        };
        this.update = this.update.bind(this);
    }
    
    update() {
        if (!this.state.hasBeenClicked){
            if (player_turn === 'X') {
                this.setState({ value: 'X' });
                player_turn = 'O';
            } else {
                this.setState({ value: 'O' });
                player_turn = 'X';
            }
            this.setState({ hasBeenClicked: true })
        }
    }

    render() {
        const buttonStyle = {
            width: '100px',
            height: '100px',
        };

        const buttonElement = createElement(
            'button',
            { className: 'square', style: buttonStyle, onClick: this.update },
            this.state.value
        );

        return buttonElement;
    }
}

class Board extends Component {


    renderSquare(row, col) {
        return createElement(Square, {key: `${row}-${col}`} );
    }
    
    render() {
        const boardRows = [];
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare(i, j));
            }
            const rowElement = createElement('div', { className: 'board-row', key: i }, row);
            boardRows.push(rowElement);
        }

        const containerElement = createElement('div', null, boardRows);
        return containerElement;
    }
}

class Game extends Component {
    constructor(props){
        super(props);
        this.state = {
            boardKey: 0, // Use this as a way to reset the board easily
        }
    }
    resetBoard() {
        player_turn = 1;
        this.setState({ boardKey: this.state.boardKey + 1 })
    }

    render() {
        const title = createElement('h1', null, `Player: ${player_turn}`)
        const board = createElement(Board, { key: this.state.boardKey })
        const resetButton = createElement('button', { onClick: () => this.resetBoard() }, 'Reset');
        return createElement('div', null, board, resetButton)
    }
}

const domContainer = document.querySelector('#React-game');
const boardElement = createElement(Game);
ReactDOM.render(boardElement, domContainer);
