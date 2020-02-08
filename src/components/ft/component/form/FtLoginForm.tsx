import React, { Component,MouseEvent,ChangeEventHandler } from 'react';
import '../../style/form/FtLoginForm.less'
import FtConfig from '../../config/FtConfig'
import { Input } from 'zent';
import FtInput from './FtInput'
interface formIe{
    email:string;
    pwd:string
}

type submitVal=(
    {}:formIe
)=>any

interface Props {
    width?:string,
    height?:string,
    submit:submitVal
};
class LoginForm extends Component<Props,{}>{  
    static displayName:string;
    state={       
        styles:{},
        val1:'',
        val2:''
    }
    inputElement:any;
    constructor(props:any){      
        super(props);
        this.inputElement=React.createRef();
        LoginForm.displayName='oginform'     
    }

    
    static defaultProps={
        width:'250px',
        height:'30px'
    }
    

    handleChage(data:string,event:any){ 
        let eventValue:string=event.target.value;
       if(data=='val1'){
           this.setState({...this.state,...{val1:eventValue}}) 
       }
       else if(data='val2'){
        this.setState({...this.state,...{val2:eventValue}}) 
       }   
    }

    componentWillReceiveProps(){
      
    }
    
    componentDidUpdate(){
    }

    shouldComponentUpdate(){     
        return true;
    }

    

    componentDidMount(){       
            let styles=this.state.styles
            styles={...styles,...{width:this.props.width,height:this.props.height}};
            let state={...this.state,...{styles:styles}}
            this.setState(state);
            this.inputElement.current.focus();
    }
    
    submit(){
        let obj:formIe={email:this.state.val1,pwd:this.state.val2}
        this.props.submit(obj);
    }

    handleFtChange(value:string){
        this.setState({...this.state,...{val1:value}}) 
        
    }

    render(){
        return(
            <div className={FtConfig.cssPrefix+'login-form'}>
                <FtInput onInputChange={this.handleFtChange.bind(this)} value={this.state.val1} inputRef={this.inputElement}></FtInput>
                <input type='password' className={FtConfig.cssPrefix+'input'} style={this.state.styles} onChange={this.handleChage.bind(this,'val2')}></input>               
                <button onClick={this.submit.bind(this)}>tijiao</button>
            </div>
        )
    }
}
export default LoginForm;