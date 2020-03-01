import React,{ Component, Fragment } from 'react';
import '../../style/header/FtHeader.less'
type PropsIe={
    width:string,
    left?:any,
};

class FtHeader extends Component<PropsIe,{}>{
    state={
        styles:{
            width:''
        }
    }
    constructor(props:any){
        super(props)
        
    }
    componentDidMount(){
        let styles=this.state.styles
        styles={...styles,...{width:this.props.width}}
        let state={...this.state,...{styles:styles}}
        this.setState(state);
        
    }
    render(){
        return(
            <div className="ft-header">
                  <div className='ft-header--content flexbetween' style={this.state.styles}>
                        <Fragment>{this.props.left}</Fragment>
                        <Fragment>{this.props.children[0]}</Fragment>
                        <Fragment>{this.props.children[1]}</Fragment>
                  </div>  
            </div>
        )
    }
}
export default FtHeader;