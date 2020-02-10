import React, {Component} from 'react';
import './compontents/button.css'
import Button from "./compontents/button";
class App extends Component {
	render() {
		return (
			<div>
				<h3>App</h3>
				<Button data="123" a="1" b="2" c="3">456</Button>
			</div>
		);
	}
}

export default App;