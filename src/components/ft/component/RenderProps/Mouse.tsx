import React,{ Component,MouseEvent } from 'react';

interface Props{
    render?:any;
}
class Mouse extends Component<Props,{}> {
    constructor(props:any) {
      super(props);
      this.handleMouseMove = this.handleMouseMove.bind(this);
      this.state = { x: 0, y: 200 };
    }
  
    handleMouseMove(event:MouseEvent) {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    }

    componentDidMount(){
      
    }
  
    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
  
          {/*
            Instead of providing a static representation of what <Mouse> renders,
            use the `render` prop to dynamically determine what to render.
          */}
          {this.props.render(this.state)}
         
        </div>
      );
    }
  }
  export default Mouse;