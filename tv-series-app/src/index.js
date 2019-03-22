import React from 'react'; //React library itself
import ReactDOM from 'react-dom';// React DOM
import './index.css'; //CSS file
import App from './App'; //App component 
import * as serviceWorker from './serviceWorker'; //Service Worker: load app faster in production

/**const getCurrentDate= ()=>{
    const date = new Date();
    return date.toDateString();
}
//const greeting = React.createElement('h1', {}, 'Hello World');
const greeting = <h1>Hello World! Current Date: {getCurrentDate()} </h1>;
 */

ReactDOM.render(<App />, document.getElementById('root'));
//render(reactElement, DOM container where I want to run  the react element, optional argument: callback function i.e.)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
