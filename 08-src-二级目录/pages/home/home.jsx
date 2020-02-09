import React from 'react';
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Message from "../home-message/message";
import News from "../home-news/news";
export default class Home extends React.Component {
	//证明在路由组件中没有显示的组件实际上是被卸载的
	// componentWillUnmount() {
	// 	console.log('组价将要卸载')
	// }

	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink className="list-group-item" to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink className="list-group-item " to="/home/message">Message</NavLink>
						</li>
					</ul>
					<Switch>
					<Route path="/home/news" component={News}/>
					<Route path="/home/message" component={Message}/>
					<Redirect to='/home/news'/>
					</Switch>
				</div>
			</div>
		);
	};
};