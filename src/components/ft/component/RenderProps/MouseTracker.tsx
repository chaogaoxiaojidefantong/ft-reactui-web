import React,{ Component } from 'react';
import Cat from './Cat'
import Mouse from './Mouse'
class MouseTracker extends Component {
    render() {
      return (
        <div>
          <h1>Move the mouse around!</h1>
          <Mouse render={mouse => (
            <Cat mouse={mouse} />
          )}>
            
          </Mouse>
        </div>
      );
    }
  }
  export default MouseTracker;
