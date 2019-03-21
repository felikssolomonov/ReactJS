import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import AppComp1 from './components/Comp1';
import AppChoosing from './components/Choosing';
import * as serviceWorker from './serviceWorker';


// ReactDOM.render(<App />, document.getElementById('rootttt'));
// ReactDOM.render(<AppComp1 />, document.getElementById('myComp'));
ReactDOM.render(<AppChoosing />, document.getElementById('Choosing'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
