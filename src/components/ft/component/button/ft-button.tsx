import React, { Component, Fragment } from 'react';
import '../../style/button/ft-button.less'
const ThemeContext=React.createContext('light')

class FtButton extends Component{
     static contextType=ThemeContext;
  componentDidUpdate(){
    
  }
  componentWillMount(){
     
  }
    render(){
        let value=this.context;
        return(
            <Fragment>
                <button>{this.props.children}</button>
            </Fragment>
        )
    }
}
export default FtButton;