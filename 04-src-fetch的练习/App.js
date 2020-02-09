import React from 'react';
export default class App extends React.Component{
	state = {
		isLoading:true,//是否展示加载中
		repoName:'',
		repoUrl:'',
		error:'',
		keyword:'h',//关键字
	}
	componentDidMount() {
		const url = `https://api.github.com/search/repositories?q=${this.state.keyword}&sort=stars`
		fetch(url).then(
			(response) => {
				console.log('请求成功了');
			//	response.json()返回值是一个Promise实例
				return response.json();
			},
		)
			.then(
				(value) => {
					console.log('成功的数据',value)
					const {html_url,name} = value.items[0];
					this.setState(
						{
							isLoading:false,
							repoName:name,
							repoUrl:html_url
						}
					)
				}
			)
			.catch(
				(error) => {
					console.log('失败了',error)
					this.setState(
						{
							isLoading:false,
							error:error.message,
						}
					)
				}
			)
		/*axios.get('https://api.github.com/search/repositories',{params:{q:this.state.keyword,sort:'stars'}}).then(
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
		)*/
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