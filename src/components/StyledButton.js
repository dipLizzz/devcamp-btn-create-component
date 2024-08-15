import styled from "styled-components";

export default styled.button`
    background-color: ${props => (props.clicked ? '#C70039' : '#007bff')};
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer    
`