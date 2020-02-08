/* eslint-disable @typescript-eslint/no-namespace */

  
    namespace UserIe {
        export interface LoginParamIe {
            userPwd: string;
            userEmail: string
        }
        export interface UserObjIe{
            userEmail:string;
            userdId:number;
            userName:string;
            userPhone:string;
            userPwd:string;
            userStatus:number;
            verifyCode:string;
        }
    }
export default UserIe;
