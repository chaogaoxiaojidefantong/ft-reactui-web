import {axios} from '../libs/api.request'
class UserMapper{
    getLoginMessage = (data:any) => {
        return axios.request({
          url: "/adminServiceZuul/User/login",
          method: "post",
          data: data
        });
      };    
}
const userMapper=new UserMapper();
export default userMapper;