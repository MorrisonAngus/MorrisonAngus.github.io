'use strict';

const { createElement, Component } = React;
player_turn = 1;

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = null;
    }
    
    update(this) {
        if (player_turn == 1) {
            this.state = 'X';
            player_turn = 2;
        }else{
            this.state = 'O'
            player_turn = 1;
        }
    }

    render() {
        const buttonStyle = {
            width: '100px',
            height: '100px',
        }

        return createElement(
            <button className="square" style={buttonStyle}>
                {this.state}
            </button>
        );
    }
}

class Board extends Component {
    renderSquare(row, col) {
        return createElement(Square);
    }
    
    render() {
        const boardRows = [];
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare(i, j));
            }
            boardRows.push(createElement('div', { className: 'board-row' }, row));
        }
        
        return createElement('div', null, boardRows);
    }
}


const domContainer = document.querySelector('#React-game');
ReactDOM.render(createElement(Board), domContainer);
