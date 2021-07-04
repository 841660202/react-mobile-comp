import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch as RouterSwitch } from 'react-router-dom';
import Menus from './pages/menus'
import Home from './pages/home'
import Detail from './pages/detail'
import DataPicker from './pages/dataPicker'
import ActionSheet from './pages/actionSheet'
import Date from './pages/date'
import DatePicker from './pages/datePicker'
import Alert from './pages/alert'
import Toast from './pages/toast'
import Switch from './pages/switch'
import TimePicker from './pages/timePicker'

function App() {
	return (
		<div className="App">
			<RouterSwitch>
				<Route exact path='/' component={Menus} />
				<Route exact path='/home' component={Home} />
				<Route path='/detail' component={Detail} />
				<Route path='/dataPicker' component={DataPicker} />
				<Route path='/timePicker' component={TimePicker} />
				<Route path='/actionSheet' component={ActionSheet} />
				<Route path='/date' component={Date} />
				<Route path='/datePicker' component={DatePicker} />
				<Route path='/alert' component={Alert} />
				<Route path='/toast' component={Toast} />
				<Route path='/switch' component={Switch} />
				<Redirect to='/' />
			</RouterSwitch>
		</div>
	);
}

export default App;
