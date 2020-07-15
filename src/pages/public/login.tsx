import React, { Component,Fragment,MouseEventHandler } from 'react';
import Authenticate from '../../router/verify/authenticate'
import userActions from '../../actions/UserActions'
import UserIe from '../../interface/UserIe';
import { Notify} from 'zent';
import history from '../../router/history'
import ErrorBoundary from './ErrorBoundary'
//import FtContainer from '../../components/ft/component/container2'
import {FtContainer,Cascader,regionsUtil,FtLine} from 'cgft-ui'
import 'cgft-ui/dist/ft.css'
import { connect } from "react-redux";
import {loginGo} from '../../store/actions/UserActions'
import userMapper from '../../mapper/UserMapper'
import  Footer from './footer'
import axios from 'axios'
import Cookies from 'js-cookie'
const authenticate=new Authenticate();
interface formIe{
    email:string;
    pwd:string
}
const a1=<div style={{width:"200px",height:"200px",backgroundColor:"red"}}></div>
const a2= <p style={{color:'black'}}>haixingba</p>
interface Person {
    name: string;
    age: number;
    location: string;
  }
let a='22'
type A1=typeof a
let b:A1='33'
interface PropsIe{
    loginGo:any;
    user:any;
}
const foo = function* () {
    yield 'foo';
    //yield * bar();
};
 
const bar = function* () {
    yield 'bar';
};

class Login extends Component<PropsIe,{defaultInputValue:string}>{
    static displayName:string;
    state:{defaultInputValue:string,value:string}={
          defaultInputValue:'66',
          value:''  
    }
    constructor(props){
        super(props);   
        let v=this.props.user; 
        this.props.loginGo({userName:'zz',age:19})     
    }
    componentDidMount(){     
       let a:string[][]=[['2']]
       let p=Cookies.get('token');
       Cookies.set('name','sansan');
       debugger
    //    axios.get('/tengxun/File/json',{method:'get',params:{session:'component',page:'cascader'}}).then(res=>{
    //     debugger
    //    },err=>{
    //        debugger
    //    })
       axios({method:'get',url:'/tengxun/File/json',params:{session:'component',page:'cascader'},headers:{Accept:'*'}}).then(res=>{
       },err=>{
       })
     
    }
    componentWillReceiveProps(nextProps){ 
        let p=nextProps.user;
    }
    submit(options:formIe){
        import('../../components/ft/index').then(index=>{
           let pwd= index.stringUtil.removeSpace(options.pwd)
           if(!pwd){
            Notify.warn('不可为空值');
            return
           }
           this.sendData(options)
        })      
    }
    sendData(options:formIe){
        let data:UserIe.LoginParamIe={userPwd:options.pwd,userEmail:options.email}      
        userActions.login(data).then((res:any)=>{
            let result=res as string
            Notify.success(result);
            authenticate.authenticate(history.push("/"));
        },(err:string)=>{
            Notify.error(err);
        })  
    }

    eventOne(e:MouseEvent){
        e.stopPropagation();
    }
    eventTwo(e:MouseEvent){
        e.stopPropagation();
        debugger
    }

    

    // componentWillMount(){
    //     let a=''||'22'
    //     userActions.login({userPwd:'123',userEmail:'123'}).then((res:any)=>{
            
    //     },(err=>{
    //         debugger
    //     }))
    // }

    render(){
        return(            
            <Fragment >     
                <div>
                <FtLine leftContent="名字" >nihaoa</FtLine>
                <FtLine leftContent="小学生">nihaoa</FtLine>    
                </div>
                <Footer defaultValue={this.state.defaultInputValue}>
                </Footer> 
                <button onClick={()=>{this.setState({defaultInputValue:'77'})}}>改变默认值</button>
                <div onClick={this.eventTwo.bind(this)}>
                <p onClick={this.eventOne.bind(this)}>你好呀</p>    
                <p >sansan</p>
                </div>             
            </Fragment>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    const {user}=state
    return {user:user};
}
const mapDispatchToProps=(dispatch,ownProps)=>{
   return{
       loginUser:()=>dispatch(loginGo({userName:'pp',age:19}))
   }
}
export default connect(mapStateToProps,{loginGo})(Login);