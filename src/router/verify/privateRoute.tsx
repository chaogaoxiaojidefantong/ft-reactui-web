import React, { Component } from 'react';
import {  Route, Redirect } from 'react-router-dom';
import Authenticate from './authenticate'
type Props = {
    rest?: string;
    path:string;
    exact:boolean
  };
  
class PrivateRoute extends Component<Props, {}>  {


  render(){
    let authenticate=new Authenticate();
      return(
        <Route
        {...this.props}    render={({ location }) =>authenticate.isAuthenticated ? (
          this.props.children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
      )
  }
}

  export default PrivateRoute;