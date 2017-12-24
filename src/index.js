import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App2 from './App2';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(<BrowserRouter>
<div>
	<Switch>
	<Route path = "/search" component = {App2}/>
	<Route path = "/" component = {App}/></Switch></div>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
