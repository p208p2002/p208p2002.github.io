import React, { Component } from 'react'
import styled from 'styled-components';
const Title = styled.h3`
    margin-bottom: 12px;
    text-align: center;
`;
const Content = styled.div`
    margin-top: 12px;
    padding-top: 10px;
    padding-bottom: 15px;
`;

export class index extends Component {
    render() {
        return (
            <div>
                {this.props.title?<Title>{this.props.title}</Title>:<></>}
                <Content>
                    {this.props.children}
                </Content>
            </div>
        )
    }
}

export default index
