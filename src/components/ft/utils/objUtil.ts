 import stringUtil from './stringUtil'
 type VerifyObjType={
      (obj:object):boolean
 }

 class ObjUtil{
   //验证对象里的字符串是否有空值,true为有，false为没有
    verifyObj(obj:any){
        let state=false
        Object.keys(obj).forEach(key=>{
          if(!obj[key].replace(/\s+/g, "")){
            state=true;
             return
          }
        })
        return state;
      }
      /**
       * 删除对象里的空值或者空字符串
       * @param obj 
       */
      deleteNull(obj:any){
        let res:any={}
          Object.keys(obj).forEach((item:string)=>{
             let val=obj[item]
             if((val!=null)&&(val!=undefined&&stringUtil.removeSpace(val+''))){
                  res[item]=val
             }
          })
          return res;
      }
      /**
       * 将对象里的值全部清为空字符串
       * @param obj 
       */
      clearObj(obj:any){
        let res:any={}
        Object.keys(obj).forEach((item:string)=>{
           res[item]=''
        })
        return res;
      }
}
export default ObjUtil;