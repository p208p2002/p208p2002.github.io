import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';

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
            <>
                <ReactTooltip effect="solid"/>
                <SkillBlock>
                    <h5>{name}</h5>
                    <Images>
                        {images.map((image, index) => {
                            let {name='',src=''} = image
                            return <img data-tip={name} key={index} src={src} alt="" srcSet="" />
                        })}
                    </Images>
                    <br />
                    <span>{content}</span>
                </SkillBlock>
            </>
        )
    }
}

export default index
