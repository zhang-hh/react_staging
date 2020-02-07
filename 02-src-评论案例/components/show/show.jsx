import React,{Component} from "react";
import Item from "../item/item";
import './show.css'
export default class Show extends Component{
	render() {
		const {comments} = this.props;
		return (
			<div className="col-md-8">
				<h3 className="reply">评论回复：</h3>
				<h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
				<ul className="list-group">
					{
						comments.map((item) =>{
							return <Item key={item.id} {...item}/>
						})
					}
				</ul>
			</div>
		);
	}
}