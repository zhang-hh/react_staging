import React,{Component} from "react";
import PubSub from 'pubsub-js';
import axios from 'axios'
export default class Search extends Component{
	search = () =>{
		//1.获取用户的输入
		const {value} = this.keyword
		//2.发送请求之前,展示loading状态
		//消息发布
		PubSub.publish('atguigu',{isFirst:false,isLoading: true})
		//3.发送请求
		axios.get('https://api.github.com/search/users',{params:{q:value}}).then(
			(response) => {
				//4.根据返回的数据更新数据
				PubSub.publish('atguigu', {
					isLoading: false,
					users: response.data.items,
				})
			},
			(error) => {
			//	更新状态
					PubSub.publish('atguigu',{
						isLoading:false,
						error:error.message,//第一个的error是APPstate的属性写的是error,第二个的error是错误对象,要从错误对象上边拿message
					})
			}
		)
	}
	render() {
		return (
			<div>
				<input ref={(input) => {this.keyword = input}} type="text" placeholder="enter the name you search"/>&nbsp;
				<button onClick={this.search}>Search</button>
			</div>
		);
	}
}