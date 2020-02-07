import React from 'react';
import axios from 'axios';
export default class App extends React.Component{
	state = {
		isLoading:true,//是否展示加载中
		repoName:'',
		repoUrl:'',
		error:'',
		keyword:'h',//关键字
	}
	componentDidMount() {
		axios.get('https://api.github.com/search/repositories',{params:{q:this.state.keyword,sort:'stars'}}).then(
			(response) => {
				const {html_url,name} = response.data.items[0];
				this.setState(
					{
						isLoading:false,
						repoName:name,
						repoUrl:html_url
					}
				)
			},
			(error) => {
				this.setState(
					{
						isLoading:false,
						error:error.message,
					}
				)
			}
		)
	}

	render() {
		//页面上应该存在的可能是
		//1.请求出错 2.请求成功 3.加载中
		const {isLoading,repoName,repoUrl,error,keyword} = this.state;
		if (isLoading){
			return <h2>isLoading...</h2>
		}else if (error){
			return <h2>{error}</h2>
		}else {
			return (
				<h2>github上以[{keyword}]字母开头的仓库,点赞量最多的是<a href={repoUrl}>{repoName}</a></h2>
			);
		}
	};
};