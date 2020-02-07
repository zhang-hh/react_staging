import React from 'react';
import About from "./components/about";
import Home from "./components/home";
import {Link,Route} from "react-router-dom";
export default class App extends React.Component{
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								<Route path="/about" component={About}/>
								<Route path="/home" component={Home}/>
							{/*
								<Link className="list-group-item active" to="/about">About</Link>
								<Route path="/about" component={About}/>
								这两个是一组,在你点击的那一刻,浏览器地址栏就会变为 http://localhost:3000/about
								加上了to属性的内容,然后Route就会看到与/about匹配上了,然后展示About组件的内容
							*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};
};