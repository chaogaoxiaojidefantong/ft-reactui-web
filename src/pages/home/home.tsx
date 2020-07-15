/* eslint-disable default-case */
import React, { Component,useState,ReactNode,useEffect } from 'react';
import './home.less'
import {FtContainer, FtButton} from '../../components/ft/index'
import {FtP1,FtP2,FtP3} from '../../components/ft/index'
import HookOne from '../../components/ft/component/hook/HookOne';
import history from '../../router/history'
import Cookies from 'js-cookie'
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
  import { DatePicker, message,Button } from 'cgft-ui';
  import store from '../../store/store'
  import {LoginThunks} from '../../store/thunks/UserThunks'
  import {login} from '../../store/actions/UserActions'
  import {Input} from 'antd'
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
    // Do whatever you want with the match...
    return <div />;
  }

 
  


function Home(){
  Cookies.set('age','12');
    let { path } = useRouteMatch();
    function handerJump(url:string){
        history.push(url);
    }
    useEffect(()=>{
        let user={userName:'zz',age:12}
        //store.dispatch(login(user)); 
        store.dispatch(LoginThunks(user));
    },[])

    useEffect(()=>{
      const {user}= store.getState();
    },[])
    
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
             <Button>cgftui</Button>
             <DatePicker></DatePicker>
              
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