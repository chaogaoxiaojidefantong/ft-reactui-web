import React, { Component,Fragment } from 'react';
import Authenticate from '../../router/verify/authenticate'
import userActions from '../../actions/UserActions'
import UserIe from '../../interface/UserIe';
import { Notify} from 'zent';
import history from '../../router/history'
import ErrorBoundary from './ErrorBoundary'
//import FtContainer from '../../components/ft/component/container2'
import FtContainer from '../../lib/ft-container/index'
import '../../dist/ftui.css'
const authenticate=new Authenticate();
interface formIe{
    email:string;
    pwd:string
}
const a1=<div style={{width:"200px",height:"200px",backgroundColor:"red"}}></div>
const a2= <p style={{color:'black'}}>haixingba</p>
class Login extends Component{
    static displayName:string;
    constructor(){
        super({});      
    }
    componentDidMount(){
       
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

    componentWillMount(){
        let a=''||'22'
        debugger
    }

    render(){
        return(            
            <Fragment >
                <FtContainer style={{width:'300px',height:'300px'}} bg={a1} con={a2}>                 
                </FtContainer>                 
            </Fragment>
        )
    }
}
export default Login;