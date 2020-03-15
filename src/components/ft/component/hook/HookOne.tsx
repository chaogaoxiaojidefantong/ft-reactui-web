import React, { ReactNode,Fragment,useState,useEffect,useContext } from 'react';
const themes = {
  light: {
    foreground: "#000000",
    background: "red"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};

const ThemeContext = React.createContext(themes.light);

function HookOne(){
  const theme = useContext(ThemeContext);
  // 1. Use the name state variable
  const [name, setName] = useState('Mary');


  // 3. Use the surname state variable
  const [surname, setSurname] = useState('Poppins');

  /**
   * 相当于componentDidupdate
   */
  function componentDid(){
    console.log('初始化')
  }

  /**
   * 加个[]就是了，不然会无限循环
   */
  useEffect(() => {
   componentDid()
  },[]);

  function unmount(){
    //alert('卸载')
  }

  // 4. 模仿的是componentWillUnmount
  useEffect(()=>{
    //alert(surname)//相当componentDidUpdate
    return unmount()
  });



 return (
   <Fragment>
     <button style={{backgroundColor:theme.background}}>{surname}</button>
     <button onClick={()=>setSurname(surname+'sur')}> 点一点</button>
   </Fragment>
 )
}
export default HookOne;