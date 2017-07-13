import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
// import Todopanel from './todolist'
import Todoaa from './App';

ReactDOM.render(<Todoaa />, document.getElementById('container'));
registerServiceWorker();
