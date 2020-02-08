import UserIe from '../interface/UserIe'
class UserUtil{
    /**
     * 
     * @param {*} data  json
     */
    setUser(data:object){        
        localStorage.setItem('user',JSON.stringify(data));
    }
    /**
     * 获得localStorage里的user数据
     */
    getUser():UserIe.UserObjIe{
    //    let userJson:string|null=localStorage.getItem('user');
    //    if(typeof userJson==='string'){
    //     return JSON.parse(userJson);
    //    }
    //    return null;  
    let json=localStorage.getItem('user');  
    json= json as string; 
    return JSON.parse(json);
    }
}
export default new UserUtil();