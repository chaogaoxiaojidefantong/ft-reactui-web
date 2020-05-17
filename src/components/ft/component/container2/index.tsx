import  React from 'react';
    interface CommonIe{
    width:string,
    height:string
 }
export interface FtContainerState extends CommonIe{

}
export interface FtContainerProps extends CommonIe{
    children:Array<any>
}
export default class FtContainer extends React.Component<FtContainerProps,FtContainerState>{
    state:CommonIe={
        width:this.props.width,
        height:this.props.height
    }
    render(){
        return(
        <div className="ft-container" style={{width:this.state.width,height:this.state.height}}>
            <div className="ft-container--bg">{this.props.children[0]}</div>
            <div className="ft-container--content">{this.props.children[1]}</div>
        </div>)
    }
}
