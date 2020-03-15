import React, { Component,Fragment } from 'react';
import {Select} from 'element-react'
import '../../style/public/header.less'
import {FtHeader} from '../../components/ft/index';

interface StateIe{
    options:Array<any>,
    value:string
}
class Header extends Component{
    state:StateIe={
        options: [{
            value: 'zh',
            label: '中文'
          }, {
            value: 'en',
            label: '英文'
          }],
          value: 'zh'
    }
    constructor(props:any){
        super(props)
    }
    componentDidMount(){
      
    }
    render(){
        return (
        <Fragment>
        
          <FtHeader width='77vw' left={<b>ftui-react组件库</b>}>
              <div><input type='text' placeholder='请输入搜索的组件'></input></div>
              <Select value={this.state.value} placeholder="请选择">
          {
          this.state.options.map(el => {
            return <Select.Option key={el.value} label={el.label} value={el.value} />
          })
          }
            </Select>
          </FtHeader>
        </Fragment>
        )
    }
}
export default Header;