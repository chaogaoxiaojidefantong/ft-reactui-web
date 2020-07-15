import React, { Component,useCallback } from 'react';
import FtInput from '../../components/ft/component/form/FtInput'
import { Input } from 'antd';
//const FtInput=React.lazy(()=>import('../../components/ft/component/form/FtInput'))
interface Props{
    defaultValue?:string
    inputRef?:any
}
interface States{
        width:string,
        height:string,
        value:string,
        divKey:number
}
class Footer extends Component<Props,States>{ 
    val;
    myRef; 
       componentDidMount(){    
        this.myRef = React.createRef();    
       }
    state={
        width:'200px',
        height:'100px',
        value:this.props.defaultValue,
        divKey:1
    }

    

    componentWillReceiveProps(nextProps){
        this.setState({value:nextProps.defaultValue})
    }

    componentWillUpdate(){
        //this.forceUpdate();
    }

    submit(){
       let v= this.val
       debugger
    }

    setValue(value){       
        this.val=value       
    }
    onEnter(e){   
       let p= e.target.value
       this.setState({value:e.target.value})
       debugger 
    }
    handleChange(event) {
       
        this.setState({value: event.target.value});
      }

    // shouldComponentUpdate(nextProps,nextState,nextContext){
    //     return false;
    // }
    render(){
        return(
            <div>
                hehe
                尾部 
                <button onClick={this.submit.bind(this)}>
                    dianji
                </button>             
                {/* <FtInput {...this.state}  onInputChange={this.setValue.bind(this)}></FtInput> */}           
                <Input onChange={this.handleChange.bind(this)}  type="text"  value={this.state.value}></Input>
                {/* <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)} /> */}
                
                
            </div>
        )
    }
}
export default Footer;