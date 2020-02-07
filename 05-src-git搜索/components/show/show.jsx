import React,{Component} from "react";
import Item from "../item/item";
export default class Show extends Component{
	render() {
		//接收app传来的属性
		//show里面有4种展示方式 1.初次加载 2.loading 3.成功的数据 4.失败的原因
		const {users,error,isFirst,isLoading} = this.props
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