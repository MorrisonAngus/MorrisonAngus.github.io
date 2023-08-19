'use strict';

const { createElement, Component } = React;

class Square extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return createElement(
            'button',
            { className: 'square' }
        );
    }
}

const domContainer = document.querySelector('#React-game');
const root = ReactDOM.createRoot(domContainer);
root.render(createElement(Square));
