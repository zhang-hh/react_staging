import React from 'react';
export default class Home extends React.Component {
	//证明在路由组件中没有显示的组件实际上是被卸载的
	componentWillUnmount() {
		console.log('组价将要卸载')
	}

	render() {
		return (
			<h3>我是Home的内容</h3>
		);
	};
};