import React,{Component} from "react";
import uuid from 'uuid'
export default class Add extends Component{
	add = () =>{
	// //    1.获取用户输入
		const name = this.name.value;
		const content = this.content.value;
	//	2.检验数据
		if(!name.trim() || !content.trim()){
		   alert('内容和名字都不能为空')
			return;//代码逻辑也要停下
		}
	//	3.更新state
	//	此方法用于添加一个评论,需要接收一个评论对象
		this.props.addComment({id:uuid(),name,content})
	//	4.清空
		this.name.value = '';
		this.content.value = '';
	}
	render() {
		return (
			<div className="col-md-4">
				<form className="form-horizontal">
					<div className="form-group">
						<label>用户名</label>
						<input ref={(input) => {this.name = input}} type="text" className="form-control" placeholder="用户名"/>
					</div>
					<div className="form-group">
						<label>评论内容</label>
						<textarea ref={(textarea) => {this.content = textarea}} className="form-control" rows="6" placeholder="评论内容"></textarea>
					</div>
					<div className="form-group">
						<div className="col-sm-offset-2 col-sm-10">
							<button onClick={this.add} type="button" className="btn btn-default pull-right">提交</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}