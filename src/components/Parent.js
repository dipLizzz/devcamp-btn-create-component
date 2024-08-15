import { Component } from "react";
import Display from "./Display";
import StyledButton from "./StyledButton";
class Parent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            display: false
        }
    }

    toggleDisplay = () => {
        this.setState({ 
            display: !this.state.display 
        })
    }
    render() {
        return (
            <>
                <StyledButton clicked={this.state.display} onClick={this.toggleDisplay}>
                    {this.state.display ? 'Destroy Component' : 'Create Component'}
                </StyledButton>
                {this.state.display ? <Display /> : null}
            </>
        )
    }
}

export default Parent