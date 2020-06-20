import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    text-align:center;
`;

export class index extends Component {
    render() {
        return (
            <>
                <Title>{this.props.children}</Title>
                <hr/>
                <br/>
            </>
        )
    }
}

export default index
