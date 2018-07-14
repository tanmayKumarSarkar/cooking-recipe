import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import registerServiceWorker from './registerServiceWorker';
import Router from './components/Router';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
