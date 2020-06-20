import React, { Component } from 'react'
import styled from 'styled-components'

const SkillBlock = styled.div`
    text-align: center;
    margin-bottom: 25px;
    & img {
        margin-right: 5px;
        width: 64px;
}
`;

export class index extends Component {
    render() {
        let { name = '', images = [], content = '' } = this.props
        return (
            <SkillBlock>
                <h5>{name}</h5>
                {images.map((image, index) => {
                    return <img key={index} src={image} alt="" srcSet="" />
                })}
                <br />
                <br />
                <span>{content}</span>
            </SkillBlock>
        )
    }
}

export default index
