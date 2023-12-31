'use strict';

const { createElement, Component } = React;
let player_turn = 'X';
const winninngPlacements = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
    [0, 4, 8], [2, 4, 6]            // Diagonal
];
let move_count = 0;

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
        if (!this.state.hasBeenClicked && !this.props.winner){
            if (player_turn === 'X') {
                this.setState({ value: 'X' });
            } else {
                this.setState({ value: 'O' });
            }
            this.setState({ hasBeenClicked: true })
            this.props.onSquareClick(this.props.row, this.props.col);
            player_turn = player_turn === 'X' ? 'O' : 'X';
        }
    }

    render() {
        const buttonStyle = {
            width: '100px',
            height: '100px',
            display: 'flex',      // Use flex display to center content
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '24px',     // Set a consistent font size
            border: '1px solid #000',
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
    constructor(props) {
        super(props);
        this.state = {
            boardArray: Array(9).fill(null),
            winner: false,
        }
    }

    renderSquare(row, col) {
        return createElement(Square, {
            key: `${row}-${col}`,
            winner: this.state.winner,
            onSquareClick: this.onSquareClick.bind(this, row, col)
        });
    }

    onSquareClick(row, col) {
        const newBoardArray = [...this.state.boardArray]; // Create a copy
        newBoardArray[row * 3 + col] = player_turn; // Update the copy

        // Check for a winner
        this.checkForWinner(newBoardArray);

        // Update the state with the new boardArray and the winner
        this.setState({
            boardArray: newBoardArray,
        });
    }

    checkForWinner(boardArray) {
        for (const placements of winninngPlacements) {
            const [a, b, c] = placements;
            if (boardArray[a] && boardArray[a] === boardArray[b] && boardArray[a] === boardArray[c]) {
                this.setState({winner: boardArray[a] === 'X' ? 'X' : 'O'})
                return boardArray[a] === 'X' ? 'X' : 'O'; // Return the winner (X or O)
            }
        }
        return null; // No winner
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


        // update the status to display to the user
        let status;
        move_count = move_count + 1;
        if (this.state.winner) {
            status = `Winner: ${this.state.winner}`;
        } else if(move_count === 10) { // needs to be 10 as render happens once before the first move is taken
            status = 'Tie Game'
        } else {
            status = `Player: ${player_turn}`;
        }

        const titleElement = createElement('h1', null, `Tic Tac Toe - ${status}`);

        const boardContainer = createElement('div', { className: 'board-container' }, boardRows);

        const containerElement = createElement('div', null, titleElement, boardContainer);
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
        player_turn = 'X';
        this.setState({ boardKey: this.state.boardKey + 1 })
        move_count = 0;
    }

    render() {
        const board = createElement(Board, { key: this.state.boardKey })
        const resetButton = createElement('button', { onClick: () => this.resetBoard() }, 'Reset');
        return createElement('div', null, board, resetButton)
    }
}

const domContainer = document.querySelector('#React-game');
const boardElement = createElement(Game);
ReactDOM.render(boardElement, domContainer);
