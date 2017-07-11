import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Todopanel from './todolist'

ReactDOM.render(<Todopanel />, document.getElementById('container'));
registerServiceWorker();
