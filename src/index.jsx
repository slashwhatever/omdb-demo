import React from 'react'
import ReactDOM from 'react-dom';
import { Provider} from "react-redux";

import './styles/index.css';

import store from './store/index.js';
import App from './components/App.jsx'

const rootNode = document.getElementById('root');

ReactDOM.render(
<Provider store={store}><App /></Provider>, rootNode);