import React, {Component} from 'react';
class Detail extends Component {
	state = {
		data:[
			{id:'001',title:'一个好消息1',content:'加油武汉！'},
			{id:'002',title:'一个好消息2',content:'加油中国！'},
			{id:'003',title:'一个好消息3',content:'加油尚硅谷！'},
			{id:'004',title:'一个好消息4',content:'加油最好的自己！'},
		]
	};
	render() {
		const id = this.props.match.params.id;
		const result = this.state.data.find((item) =>{
		    return item.id === id
		});
		return (
			<ul>
				<li>ID:{result.id}</li>
				<li>TITLE:{result.title}</li>
				<li>CONNENT:{result.content}</li>
			</ul>
		);
	}
}

export default Detail;