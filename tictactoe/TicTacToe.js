'use strict';

const { createElement, Component } = React;

class Square extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const buttonStyle = {
            width: '300px',
            height: '300px',
        }

        return createElement(
            'button',
            { className: 'square', style: buttonStyle }
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
