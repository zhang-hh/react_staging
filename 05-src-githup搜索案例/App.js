import React,{Component} from 'react';
//说明React底层使用了默认暴露了React使用了分别暴露或者是统一暴露了Component
import Search from "./components/search/search";
import Show from "./components/show/show";
class App extends Component{
	state = {
		isFirst:true,//是否是第一次加载
		isLoading:false,//标识是否加载中
		error:'',//错误信息
		users:[]//所有的用户信息
	}
	//子组件想要更改父组件的状态,需要父组件向子组件传递函数
	//更新APP的状态
	updateAppState = (obj) =>{
	    this.setState(obj)
	}
	render() {
        return (
	        <div id="app">
		        <div className="container">
			        <section className="jumbotron">
				        <h3 className="jumbotron-heading">Search Github Users</h3>
				        <Search updateAppState = {this.updateAppState}/>
			        </section>
			        <Show {...this.state}/>
		        </div>
	        </div>
        )

    }
}
export default App;
