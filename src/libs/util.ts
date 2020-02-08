import Cookies from 'js-cookie'
import config from '../config/config'
import {stringUtil} from '../components/ft/index'
  export const setToken=(token:string)=>{
    if(token){
      token=stringUtil.randomMd(token);
    }      
    Cookies.set('userToken',token,{expires:config.cookieExpires});
  }

  export const getToken=()=>{
    let mdToken=Cookies.get('userToken');
    if(mdToken){
      return stringUtil.randomMdDe(mdToken);
    }
      return null;
  }