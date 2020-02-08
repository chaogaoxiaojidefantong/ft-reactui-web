
import {getToken, setToken} from '../../libs/util'
class Authenticate{
    isAuthenticated=false  
    constructor(){
      let token=getToken();
      if(token!=null||''){
        this.isAuthenticated=true
      }
    }
      authenticate(cb:any) {
         this.isAuthenticated=true 
          setTimeout(cb, 100); // fake async
        }
        signout(cb:any) {
         this.isAuthenticated=false
         localStorage.clear();
         setToken('');         
         setTimeout(cb, 100);
        }
  }
  export default Authenticate;