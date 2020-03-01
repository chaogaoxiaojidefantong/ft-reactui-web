import React, { ReactNode,Fragment,Component } from 'react';
import '../../style/p/ft-p3.less'
import PropsType from './FontIe'
class FtP3 extends Component<PropsType,{}>{
     render(){
         return(
         <Fragment>
             <p className='ft-p3'>{this.props.children}</p>
         </Fragment>
         )
     }
}
export default FtP3;