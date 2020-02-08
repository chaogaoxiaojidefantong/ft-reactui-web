import React,{ Component,Fragment } from 'react';
interface Props{
    mouse:any;
}
class Cat extends React.Component<Props,{}> {
    render() {
      const mouse = this.props.mouse;
      return (
          <Fragment>
              <img src='logo192.png' style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
          </Fragment>
        
      );
    }
  }
  export default Cat;