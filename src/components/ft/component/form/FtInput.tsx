import React,{ Component } from 'react';
import '../../style/form/FtInput.less'
interface OnInputChangeIe{
    (value:any):void;
}
type Props={
    width?:string;
    height?:string;
    value?:string;
    onInputChange?:OnInputChangeIe;
    inputRef?:any
}

interface StyleIe{
    width?:string;
    height?:string;
    [index: string]: string|undefined;
}
interface StateIe{
    styles:object,
    value:string
}
const WrappedComponent = React.forwardRef((props, ref) => {
   
    return null;
  });
class FtInput extends Component<Props,StateIe>{
    
    state={       
        styles:{},
        value:''
    }


    handleChage(event:any){
        this.props.onInputChange(event.target.value);      
    }

    
    shouldComponentUpdate(){
        //return false;componentDidUpdate不会执行
        return true;      
    }

    componentDidUpdate(){
        
    }

    componentDidMount(){
        let styles=this.state.styles
        if(this.props.width){
            styles={...styles,...{width:this.props.width}};
            let state={...this.state,...{styles:styles}}
            this.setState(state);
        }
        if(this.props.height){
            styles={...styles,...{height:this.props.height}};
            let state={...this.state,...{styles:styles}}
            this.setState(state);
        }
    }

    render(){
        return(
            <div className='FtInput'>
                <input type="text"  onChange={this.handleChage.bind(this)} value={this.props.value} style={this.state.styles} ref={this.props.inputRef}/>
            </div>
        )
    }
}
export default FtInput;