import React,{Component} from "react";
import './item.css'
export default class Item extends Component{
	delete = (id,name) =>{
	//    1.询问用户是否删除
		if (window.confirm(`确定删除么?[${name}]`)){
			//	2.获取要删除的评论id
			// this.props.deleteComment(id)
			this.props.deleteComment(id)
			//  3.去状态中删除id对应得相应评论
		}
	}
	render() {
		const {id,name,content} = this.props;
		return (
			<li className="list-group-item">
				<div className="handle">
					<a onClick={() => {this.delete(id,name)}} href="##">删除</a>
				</div>
				<p className="user"><span>{name}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		);
	}
}