import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './FtPortal.less'
interface typesIe{
    width:string;
    height:string
}
const modalRoot = document.getElementById('modal-root');
class FtPortal extends Component<typesIe,{}>{
    el:any;
    constructor(props:any){
       super(props);
       this.el = document.createElement('h1');       
    }
    componentDidMount() {
        modalRoot.appendChild(this.el);
      }
      componentWillUnmount() {
        modalRoot.removeChild(this.el);
      }
    render(){
        return ReactDOM.createPortal(this.props.children,this.el);
    }

}
export default FtPortal;