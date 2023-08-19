export default function Square() {
    return <button className="square">X</button>;
}

const domContainer = document.querySelector('#React-game');
const root = ReactDOM.createRoot(domContainer);
root.render(Square());