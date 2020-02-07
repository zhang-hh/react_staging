import React,{Component} from "react";
import Item from "../item/item";
import PubSub from 'pubsub-js';
export default class Show extends Component{
	state = {
		isFirst:true,//是否是第一次加载
		isLoading:false,//标识是否加载中
		error:'',//错误信息
		users:[]//所有的用户信息
	}
	componentDidMount() {
	//	1.开启定时器 2.发送网络请求 3.订阅消息
	//	消息订阅
		PubSub.subscribe('atguigu',(msg,data) =>{
			this.setState(data)
		})
	}

	render() {
		//show里面有4种展示方式 1.初次加载 2.loading 3.成功的数据 4.失败的原因
		const {users,error,isFirst,isLoading} = this.state
		if(isFirst){
			return <h2>输入关键词,点击搜索</h2>
		}else if (isLoading){
			return <h2>Loading...</h2>
		}else if (error){
			return <h2>{error}</h2>
		}else {
			return (
				<div className="row">
					{
						users.map((personObj) =>{
							return <Item key={personObj.login} {...personObj}/>
						})
					}
				</div>
			);
		}

	}
}