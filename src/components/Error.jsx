import React from 'react'
//class for display a error message

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    } //take error from the aplication
  
    static getDerivedStateFromError(error) {
      return { hasError: true }; //change the value of the state
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <div className="error">
                <h1>Something is wrong!</h1> {/* display a error mensage */}
                <p>Check the code entered.</p>
            </div>
        );
      }
  
      return this.props.children; 
    }
  }
export default ErrorBoundary