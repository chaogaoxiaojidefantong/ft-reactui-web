import {
    Router,
    Switch,
    Route,
    BrowserRouter
  } from "react-router-dom";
  import React, { Component } from 'react';
  import Login from '../pages/public/login'
  import Home from '../pages/home/home'
  import history from './history'
  import Footer from '../pages/public/footer'
class FtRouter extends Component{
    componentDidUpdate(){
        
    }
    componentWillReceiveProps(){
        
    }
    componentDidCatch(){
        
    }
   render(){
       return(
           <div>
              <Router history={history}>                   
                  <Switch >
                     <Route component={Login} exact path='/login' ></Route>
                     <Route component={Home}  exact path='/'></Route>          
                  </Switch>
                  <Footer></Footer>
              </Router>
           </div>
       )
   }
}
export default FtRouter;