import React, { Component } from 'react';
import FtInput from '../../components/ft/component/form/FtInput'
class Footer extends Component{ 
       componentDidMount(){
           
       }
    state={
        width:'200px',
        height:'100px'
    }
    render(){
        return(
            <div>
                hehe
                尾部
                <FtInput {...this.state}></FtInput>
            </div>
        )
    }
}
export default Footer;