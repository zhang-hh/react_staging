import React,{Component} from 'react';
//说明React底层使用了默认暴露了React使用了分别暴露或者是统一暴露了Component
import Search from "./components/search/search";
import Show from "./components/show/show";
class App extends Component{
	render() {
        return (
	        <div id="app">
		        <div className="container">
			        <section className="jumbotron">
				        <h3 className="jumbotron-heading">Search Github Users</h3>
				        <Search/>
			        </section>
			        <Show/>
		        </div>
	        </div>
        )

    }
}
export default App;
