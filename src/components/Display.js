import { Component } from "react";

class Display extends Component {
    componentWillMount() {
        console.log('Component will mount');
        
    }

    componentDidMount() {
        console.log('Component did mount');
        
    }

    componentWillUnmount() {
        console.log('Component will unmount');
        
    }
    render() {

        return (
            <h1>I exist</h1>
        )
    }
}

export default Display