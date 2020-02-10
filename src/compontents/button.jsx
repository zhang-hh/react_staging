import React, {Component} from 'react';
import "./button.css";
class Button extends Component {
	render() {
		console.log(this.props);
		//const value = this.props.children;
		//const a = this.props.a;
		//const b = this.props.b;
		//const d = this.props.d;
		// const c = this.props.c;

		return (
			<button className="btn" {...this.props}/> //可以将中间的值放在里面<button>456</button>
			//<button className="btn" a={a} b={b} c={c} d={d} >{value}</button>

		);
	}
}

export default Button;