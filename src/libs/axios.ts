import axios from "axios";
import qs from 'qs';
import {getToken} from './util';
import {ObjUtil} from '../components/ft/index'
const objUtil=new ObjUtil();
class HttpRequest{
    baseUrl=''
    constructor(baseUrl:string){
        this.baseUrl=baseUrl;
    }
    getInsideConfig () {
        const config = {
          withCredentials:true,
          baseURL: this.baseUrl,
          paramsSerializer: (params:any)=> {
            if(params.levelToken){
                delete params.levelToken
            }else{
              const token={token:getToken()}; 
              params={...params,...token};
            }          
            return qs.stringify(params);
          },
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
        return config
      }      
      interceptor(axiosInstance:any){
        axiosInstance.interceptors.request.use((config:any)=>{
            config.data = qs.stringify(config.data);//转对象为url拼接的类型            
            return config;
          }, (error:any)=>{
            // 对请求错误做些什么
            return Promise.reject(error);
          });
          axiosInstance.interceptors.response.use((res:any)=>{
            const { data, status } = res
            if(status!==200){
              alert('服务器内部出错');
              return '服务器内部出错';
            }
            return  data
          },(err:any)=>{        
            return Promise.reject('服务器内部出错');
          })
      };
    request(option:any){
        let axiosInstance=axios.create();          
        let config=Object.assign(this.getInsideConfig(),option); 
        this.interceptor(axiosInstance);
        //config=this.filterConfig(config);
        return axiosInstance(config);         
    }
     /**
     * 方便用户选择配置,参数带responseType则选择配置里的responseType
     * @param {*} config 
     */
    filterConfig(config:any){
      let data=config.data
        if(data.levelCredentials){
               config.withCredentials=false;
               delete data.levelCredentials
        }      
        if(data.responseType){        
            config.responseType=data.responseType
            delete data.responseType;
        }  
        config.data=data;      
        return config;
    }
};
export default HttpRequest