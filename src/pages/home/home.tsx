/* eslint-disable default-case */
import React, { Component,useState,ReactNode } from 'react';
import './home.less'
import {FtContainer, FtButton} from '../../components/ft/index'
import {FtP1,FtP2,FtP3} from '../../components/ft/index'
import HookOne from '../../components/ft/component/hook/HookOne';
import history from '../../router/history'
import {
    Router,
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
    Link,
    useParams
  } from "react-router-dom";
  import Index from './install/index'
// class Home extends Component{  
//     componentDidMount(){
       
//     }
//     componentWillUnmount() {
         
//     }
//     constructor(props:any){
//         super(props);
//     }
//     render(){
        
//         return(
            // <div className='home'>

            //     <Switch>
                    
            //     </Switch>
            //     home
            // </div>
//         )
//     }
// }


  function BlogPost() {   
    let match = useRouteMatch({path:"/home/:id",exact:false});  
    debugger
    // Do whatever you want with the match...
    return <div />;
  }

 
  


function Home(){
    let { path } = useRouteMatch();
    function handerJump(url:string){
        history.push(url);
    }
    return(
        <div className='home'>
             <FtContainer width='220px' height='900px'>
                <article>
                    <HookOne></HookOne>
                    <FtP1 >安装指南</FtP1>
                    <FtP2 onClick={handerJump}>安装</FtP2>
                    <Link to='/home/install'>快速上手</Link>
                    <FtP1>组件</FtP1>
                    <FtP3>Basic</FtP3>
                </article>
             </FtContainer>
             <FtButton>ananiusai</FtButton>
             <div className='home-right'>
                <Switch>
                    <Route path={`${path}/install`}  exact>
                        <Index></Index>
                    </Route>                       
                </Switch>
             </div>      
        </div>
    )
}
export default Home;