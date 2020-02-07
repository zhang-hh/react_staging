import React,{Component} from 'react';//说明React底层使用了默认暴露了React使用了分别暴露或者是统一暴露了Component
import Person from "./components/person";
import Dog from "./components/dog";
class App extends Component{
    render() {
        return (
            <div>
                <h2>React</h2>
                <Person/>
                <Dog/>
            </div>
        )

    }
}
export default App;
