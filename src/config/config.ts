export  interface ConfigIe{
   dev: string,//测试环境
   pro: string,//生产环境
   cookieExpires: number//Cookie的生存周期
   successCode:number//后台返回的成功验证码
   failCode:number//后台返回失败的验证码
   errMsg:string,//错误返回信息
}
 class Config implements ConfigIe{
  readonly dev="http://39.105.190.207:8181/api/"
  readonly pro="http://39.105.190.207:7775/api/"
  readonly cookieExpires:number=1/6
  readonly successCode:number=200
  readonly failCode:number=400
  readonly errMsg:string='服务器内部出错'
}
export default new Config();