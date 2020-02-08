     class StringUtil{
    //去除字符串中的空行
    removeSpace(str:string) {
        return str.replace(/\s+/g, "");
    }
     //判断字符串是否符合手机号格式
     mobileReg(val:any) {
        let MobileModel = /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
        let res = MobileModel.test(val);
        return res;
    }
    /**
     * 判断查询字符串是否在完整字符串中
     * @param url 完整字符串
     * @param search 查询的字符串
     */
    indexofRes(url:string,search:string){
        if(url.indexOf(search)==-1){
            return false;
        }
        return true;   
    }

    //6位加密的解密
    randomMdDe(mdToken:string) {
        let len = mdToken.length;
        let token = mdToken.substring(0, len - 6);
        return token;
    }

    //6位加密，放在尾部
    randomMd(token:string) {
        let mdtoken = token + this.randomWord(false, 6,12);
        return mdtoken;
    }



    /**
     * 保留body里的数据，去除空行
     */
    getHtmlBody(html:string):string{
        let start=html.search('<body>')
        let end=html.search('</body>')+7
        let res=html.substring(start,end);
        res=res.replace(/[\n]/g,'');
        return res;
    }


    //生成3-32位随机串：randomWord(true, 3, 32)
    //生成43位随机串：randomWord(false, 43)  
    randomWord(randomFlag:boolean, min:number, max:number) {
        var str = "",
            range = min,
            arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        // 随机产生
        if (randomFlag) {
            range = Math.round(Math.random() * (max - min)) + min;
        }
        for (var i = 0; i < range; i++) {
            let pos = Math.round(Math.random() * (arr.length - 1));
            str += arr[pos];
        }
        return str;
    }
}
const stringUtl=new StringUtil()
export default stringUtl;