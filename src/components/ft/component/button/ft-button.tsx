import React, { Component, Fragment } from 'react';
import '../../style/button/ft-button.less'
const ThemeContext=React.createContext('light')
import FtP1 from '../p/ft-p1'
class FtButton extends Component{
     static contextType=ThemeContext;
     state={num:1}
  componentDidUpdate(){
    
  }
  componentWillMount(){
      let p='name'
        let a='vvv'
  }
    render(){
        let value=this.context;
        return(
            <Fragment>
                <button >{this.props.children}</button>
            </Fragment>
        )
    }
}
export default FtButton;