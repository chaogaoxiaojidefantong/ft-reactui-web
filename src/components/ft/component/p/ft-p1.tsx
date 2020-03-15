import React, { ReactNode,Fragment } from 'react';
import '../../style/p/ft-p1.less'
import PropsType from './FontIe'
function FtP1(props:PropsType){
    function handleClick(){
        //props.onClick();
    }
 
    return(
        <Fragment>
            <p className="ft-p1" onClick={handleClick}>{props.children}</p>
        </Fragment>
    )
}
export default FtP1;