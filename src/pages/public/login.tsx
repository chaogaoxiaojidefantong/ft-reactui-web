import React, { Component,Fragment } from 'react';
import Authenticate from '../../router/verify/authenticate'
import userActions from '../../actions/UserActions'
import {FtLoginForm} from '../../components/ft/index'
import UserIe from '../../interface/UserIe';
import { Notify} from 'zent';
import history from '../../router/history'
import ErrorBoundary from './ErrorBoundary'
const authenticate=new Authenticate();
interface formIe{
    email:string;
    pwd:string
}
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
        
    }
    render(){
        return(            
            <Fragment >   
                <ErrorBoundary>
                <FtLoginForm submit={this.submit.bind(this)} width='200px' >                
                </FtLoginForm>  
                </ErrorBoundary>                    
                </Fragment>
        )
    }
}
export default Login;