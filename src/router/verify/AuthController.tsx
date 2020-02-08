/* eslint-disable default-case */
import React, { Component } from 'react';
import history from '../history'
import Authenticate from './authenticate'
import { Notify } from 'zent';
import userUtil from '../../libs/userUtil'
import UserIe from '../../interface/UserIe'
class AuthController extends Component{

  authenticate:Authenticate;
  user:UserIe.UserObjIe;
  constructor(){
      super({});
      this.authenticate=new Authenticate();
      this.user=userUtil.getUser();
  }

    componentDidMount(){
        
    }

    componentWillUnmount(){
      
    }

    signOut(){
      Notify.success("退出成功")
      this.authenticate.signout(history.replace('/login'));
      this.forceUpdate();
    }

    render(){
        return this.authenticate.isAuthenticated ? (
            <p>
              Welcome!{this.user.userName}
              <button
                onClick={this.signOut.bind(this)}
              >
                Sign out
              </button>
            </p>
          ) : (
            <p>You are not logged in.</p>
          );
    }
}
export default AuthController;