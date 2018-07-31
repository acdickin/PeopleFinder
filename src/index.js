import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './styles/searchbar.css'
import './styles/results.css'
import './styles/error.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
