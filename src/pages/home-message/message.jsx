import React, {Component} from 'react';
import {Link,Route} from "react-router-dom";
import Detail from "../home-message-detail/detail";
class Message extends Component {
	state = {
	    message:[]
	};
	//模拟网络请求
	componentDidMount() {
		setTimeout(()=>{
			this.setState({
				message:[
					{id:'001',title:'消息1'},
					{id:'002',title:'消息2'},
					{id:'003',title:'消息3'},
					{id:'004',title:'消息4'},
				]
			})
		},1000)
	}
	pushShow = (id) =>{
		//this.props.history专门用来展示浏览器的历史记录
		this.props.history.push(`/home/message/detail/${id}`)
	}
	replaceShow = (id) =>{
		this.props.history.replace(`/home/message/detail/${id}`)
	}
	forword = () =>{
		this.props.history.goForward();
	}
	back = () => {
		this.props.history.goBack();
	}
	render() {
		return (
			<div>
				<ul>
					{
						this.state.message.map((messageObj) =>{
							return (
								<li key={messageObj.id}>
									<Link to={`/home/message/detail/${messageObj.id}`}>{messageObj.title}</Link>
									{/*
										没有使用Link利用两个按钮实现了页面的跳转
									*/}
									<button onClick={() => {this.pushShow(messageObj.id)}}>push查看</button>&nbsp;&nbsp;
									<button onClick={() => {this.replaceShow(messageObj.id)}}>replace查看</button>&nbsp;&nbsp;
								</li>
							)
						})
					}
				</ul>
				<button onClick={this.forword}>前进</button>
				<button onClick={this.back}>后退</button>
				<hr/>
				<Route path="/home/message/detail/:id" component={Detail}/>
			</div>
		);
	}
}

export default Message;