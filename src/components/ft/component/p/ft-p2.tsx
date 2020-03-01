import React, { Component, ReactNode, Fragment,MouseEvent } from 'react';
import '../../style/p/ft-p2.less'
import PropsType from './FontIe'

function FtP2(props: PropsType) {
    function handleClick(obj){
        props.onClick(obj);
    }
    return (
        <Fragment>
            <p className='ft-p2' onClick={handleClick.bind(this)}>{props.children}</p>
        </Fragment>
    )
}
export default FtP2;