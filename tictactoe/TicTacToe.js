export default function Square() {
    return (
    'button',
    'square'
        );
}

const domContainer = document.querySelector('#React-game');
const root = ReactDOM.createRoot(domContainer);
root.render(Square());