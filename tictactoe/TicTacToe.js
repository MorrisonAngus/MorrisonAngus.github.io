'use strict';

const { createElement, Component } = React;
let player_turn = 1;

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
        this.update = this.update.bind(this);
    }
    
    update() {
        if (player_turn == 1) {
            this.setState({ value: 'X' });
            player_turn = 2;
        } else {
            this.setState({ value: 'O' });
            player_turn = 1;
        }
    }

    render() {
        const buttonStyle = {
            width: '100px',
            height: '100px',
        };

        return (
            <button className="square" style={buttonStyle} onClick={this.update}>
                {this.state.value}
            </button>
        );
    }
}

class Board extends Component {
    renderSquare(row, col) {
        return <Square />;
    }
    
    render() {
        const boardRows = [];
        for (let i = 0; i < 3; i++) {
            const row = [];
            for (let j = 0; j < 3; j++) {
                row.push(this.renderSquare(i, j));
            }
            boardRows.push(<div className="board-row">{row}</div>);
        }
        
        return <div>{boardRows}</div>;
    }
}

const domContainer = document.querySelector('#React-game');
ReactDOM.render(<Board />, domContainer);
