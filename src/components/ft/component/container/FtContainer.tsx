import React, { Component,useState,useEffect,ReactNode } from 'react';
import "../../style/container/FtContainer.less";
type PropsType={
    width?:string,
    height?:string,
    children?:ReactNode
}
function FtContainer(props:PropsType){
    let [styles,setStyles]=useState({width:props.width,height:props.height})
    useEffect(()=>{
        //setWidth(props.width); 
    })
    return(
    <div className='ft-container' style={styles}>
        <div className='ft-container--con' style={styles}>
            <div>{props.children}</div>
        </div>
    </div>)
}
export default FtContainer;