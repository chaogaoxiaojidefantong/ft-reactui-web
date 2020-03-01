import {
    Router,
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
  } from "react-router-dom";
  import React, { Component } from 'react';
  import Login from '../pages/public/login'
  import Home from '../pages/home/home'
  import history from './history'
  import Footer from '../pages/public/footer'
  import Header from '../pages/public/header'
  import './index.less'
  
  export default function FtRouter() {
       return(
              <Router history={history}>         
                  <Switch >
                      <Route exact path='/'>
                          <Redirect to='/home'></Redirect>
                      </Route>
                     <Route component={Login} exact path='/login' ></Route>   
                     <Route   path='/home'  >  
                        <section className='section'> 
                            <div className='section-div'>
                                <Header></Header>                                   
                                <Home ></Home>  
                                <Footer></Footer>    
                            </div>                          
                        </section>                 
                     </Route>          
                  </Switch>
              </Router>
       )
}