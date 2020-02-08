import userMapper from '../mapper/UserMapper'
import UserIe from '../interface/UserIe';
import history from '../router/history'
import CommonIe from '../interface/CommonIe';
import {setToken} from '../libs/util'
import userUtil from '../libs/userUtil'

class UserActions{
    /**
     * 登录操作
     * @param data 
     */
    login(data:UserIe.LoginParamIe){
        return new Promise((resolve,reject)=>{
            userMapper.getLoginMessage(data).then((res:any)=>{
                const result=res as CommonIe.ResIe
                if(result.status==200){
                  let data:{token:string,user:any}=result.data
                  setToken(data.token);
                  userUtil.setUser(data.user);
                  resolve(result.msg);
                }
            },err=>{
                return reject('fail');
            })
        })
        
    }
}
export default new UserActions();