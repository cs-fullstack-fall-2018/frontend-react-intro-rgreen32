import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import BankAccount from "./BankAccount";

ReactDOM.render(<BankAccount firstName="Rey"/>, document.getElementById('root'));
registerServiceWorker();
