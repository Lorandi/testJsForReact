import './index.css';
import App from './App';

const $root = document.querySelector("#root")

let $htmlApp = App("outro Testando") + App("mais um");
$root.insertAdjacentHTML("beforeend", $htmlApp + $htmlApp)



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

