import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, 
// 	document.getElementById('root'));
// // registerServiceWorker();

ReactDOM.render(
	<Router>
		<div>
			<Route exact path = '/' component={App} />
			<Route path = '/charities' component={App} />
			<Route path = '/donors' component={App} />
		</div>
	</Router>,
	document.getElementById('root')
);
	