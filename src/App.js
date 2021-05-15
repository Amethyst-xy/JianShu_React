import React,{Component} from 'react';
import Header from './common/header/index';
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter,Route} from 'react-router-dom';
import Detail from './pages/detail/loadable';
import Home from './pages/home';
import Login from './pages/login';
import Write from './pages/write';

class App extends Component{
    render(){
       return (
         <Provider store={store}>
           <BrowserRouter>
              <Header/>
              <Route path='/' exact component={Home}/>
              <Route path='/detail/:id' exact component={Detail}/>
              <Route path='/login/:id' exact component={Login}/>
              <Route path='/write' exact component={Write}/>
          </BrowserRouter>
         </Provider>
       );
    }
}

export default App;
