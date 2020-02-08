import React, { Component } from 'react';
/**
 * catch component error
 */
class ErrorBoundary extends Component {

    state={
        hasError: false
    }
    constructor() {
      super({});
    }
  
    componentDidCatch(error:any, info:any) {
      // Display fallback UI
      
      this.setState({ hasError: true });
    }
  
    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>;
      }
      return this.props.children;
    }
  }

  export default ErrorBoundary;