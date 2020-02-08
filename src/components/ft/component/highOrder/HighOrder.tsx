import React, { Component } from 'react'
/**
 * 此高阶组件仅应用于input
 */
interface OnInputChangeIe{
  (value:any):void;
}
type Props={
  width?:string;
  height?:string;
  value?:string;
  onInputChange?:OnInputChangeIe;
  inputRef?:any;
  name?:string
}
 const HighOrder= (WrappedComponent:any)=>{
    return class extends Component<Props,{}>{
        componentWillReceiveProps(nextProps:any) {
            
          }
          
          componentDidMount(){
            
          }
          render() {
            const {name,...passThroughProps}=this.props
            return <WrappedComponent  {...this.props}/>;
          }
    }
}
export default HighOrder;