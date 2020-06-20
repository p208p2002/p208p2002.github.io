import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.div`
    background-color: #152238;
    color: #D3D3D3;
    text-align: center;
    height: 48px;
    box-sizing: border-box;
    /* position: absolute; */
    /* bottom: 0; */
    width: 100%;
    & p {
        margin-top: auto;
        margin-bottom: auto;
        height: 48px;
        line-height: 48px;
    }
`;

export class index extends Component {
    render() {
        return (
            <Footer>
                <p>{this.props.children}</p>
            </Footer>
        )
    }
}

export default index
