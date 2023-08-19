'use strict';

const board = React.createElement;

class Square extends React.Component() {
    constructor(props){
        super(props)
    }
    
    render(){
        return board(
                'button',
                'square'
            );
    }
}

const domContainer = document.querySelector('#React-game');
const root = ReactDOM.createRoot(domContainer);
root.render(board(Square));