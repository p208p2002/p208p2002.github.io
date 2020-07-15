import React, { Component } from 'react'
import styled from 'styled-components'

const SkillBlock = styled.div`
    text-align: center;
    margin-bottom: 25px;
`;

const Images = styled.div`
    & img {
        margin-top:18px;
        margin-bottom:18px;
        margin-right: 20px;
        width: 64px;
    }

    & img:hover{
        margin-top:0px;
        margin-bottom:0px;
        margin-right: 20px;
        width: 90px;
        transition: 0.3s;
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
