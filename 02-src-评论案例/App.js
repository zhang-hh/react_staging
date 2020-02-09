import React,{Component} from 'react';
//说明React底层使用了默认暴露了React使用了分别暴露或者是统一暴露了Component
import Add from "./components/add/add";
import Show from "./components/show/show";
class App extends Component{
    state = {
        comments:[
            {id:1234,name:'zhh',content:'dfghj'},
            {id:12345,name:'zhx',content:'dfghjhh'},
            {id:12346,name:'qf',content:'dfghjjjj'},
        ]
    }
    addComment = (commentObj) =>{
        //	1.获取原状态
        let {comments} = this.state;
        comments.unshift(commentObj);
        this.setState({comments});
    }
    deleteComment = (id) =>{
        let {comments} = this.state;
        comments = comments.filter((commentObj) =>{
            return commentObj.id !== id
        })
        this.setState({comments});
    }
	render() {
        const {comments} = this.state
        return (
            <div id="app">
                <div>
                    <header className="site-header jumbotron">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12">
                                    <h1>请发表对React的评论</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container">
					<Add addComment = {this.addComment}/>
					<Show comments={comments} deleteComment = {this.deleteComment}/>
                    </div>
                </div>
            </div>
        )

    }
}
export default App;
