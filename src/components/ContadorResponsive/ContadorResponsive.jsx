import React from 'react';
import ReactDOM from 'react-dom';

const app = document.querySelector('.app');
const useState = React.useState

function Contador() {
    let [value, setValue] = useState(0)
    let [times, setTimes] = useState(0)

    return <React.Fragment>
        <button onClick={() => { setValue(value + 1); setTimes(times + 1) }}> incrementar + </button>
        <span>{value}</span>
        <button onClick={() => { setValue(value - 1); setTimes(times + 1) }} button> decrementar - </button>
        <div>: {times}</div>
    </React.Fragment>;
}

ReactDOM.render(<Contador />, app)
export default ContadorResponsive;