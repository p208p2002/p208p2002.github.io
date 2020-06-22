import React, { Component } from 'react'
import styled from 'styled-components'

const SkillBlock = styled.div`
    text-align: center;
    margin-bottom: 25px;
`;

const Images = styled.div`
    & img {
        margin-right: 18px;
        width: 64px;
    }
    & :nth-last-child(1){
        margin-right: 0px;
    }
`

export class index extends Component {
    render() {
        let { name = '', images = [], content = '' } = this.props
        return (
            <SkillBlock>
                <h5>{name}</h5>
                <Images>
                    {images.map((image, index) => {
                        return <img key={index} src={image} alt="" srcSet="" />
                    })}
                </Images>
                <br />
                <span>{content}</span>
            </SkillBlock>
        )
    }
}

export default index
