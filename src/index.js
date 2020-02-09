//入口文件 (供webpack使用)
import React from 'react';//引入React核心库
import ReactDOM from 'react-dom'; //引入ReactDOM
import {BrowserRouter} from "react-router-dom";
import App from './App';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

