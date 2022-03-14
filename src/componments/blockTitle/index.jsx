import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Title = styled.h3`
    text-align:center;
`;

export class index extends Component {
    render() {
        return (
           <>
            <Container>
                <Title>{this.props.children}</Title>
            </Container>
            <hr />
           </>
        )
    }
}

export default index
