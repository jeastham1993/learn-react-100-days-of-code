# Styled Components

- [Styled Components Documentation](https://www.styled-components.com/)

Styled components is an external library that makes styling in React much more straightforward. It allows CSS to be written and applied to a React component, which can then be used within the JSX.

``` js

import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media(min-width: 500px) {
        width: 450px
}`

const person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.click}> I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </StyledDiv>
    )
}

export default person;

```

To apply alternative styles, a combination of props and string.format can be used to amend the styled object.

``` js

const StyledButton = styled.button`
    background-color: ${props => props.alt === true ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid green;
    padding: 8px;
    cursor: pointer;

    &:hover{
      background-color: ${props => props.alt === true ? 'lightsalmon' : 'lightgreen'};
      color: black;
    }
`

<StyledButton alt={this.state.showPersons} onClick = {
    this.togglePersonsHandler
}
>Toggle persons</StyledButton> 

```