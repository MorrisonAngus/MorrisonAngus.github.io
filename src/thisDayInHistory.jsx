'use strict';

const { createElement, Component } = React;

// This displays a box with the info collected from chat gpt
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),// Get the date for the submission to chat gpt
            output: 'This is where the output goes'
        }
    }


    getDayDetails () {

    }

    render () {
        return (
            <div className="GTP_output">
                <p>{this.state.output}</p>
            </div>
        )
    }
}

const domContainer = document.querySelector('#React-game');
const boardElement = <Display />;
ReactDOM.render(boardElement, domContainer);