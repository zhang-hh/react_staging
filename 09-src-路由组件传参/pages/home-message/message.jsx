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

	render() {
		return (
			<div>
				<ul>
					{
						this.state.message.map((messageObj) =>{
							return (
								<li key={messageObj.id}>
									<Link replace={true} to={`/home/message/detail/${messageObj.id}`}>{messageObj.title}</Link>
								</li>
							)
						})
					}
				</ul>
				<hr/>
				<Route path="/home/message/detail/:id" component={Detail}/>
			</div>
		);
	}
}

export default Message;