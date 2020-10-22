import React, { Component } from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip';

const Images = styled.div`
    & img {
        margin-top:18px;
        margin-bottom:18px;
        margin-right: 20px;
        width: 72px;
        transition: 0.15s;
    }

    & img:hover{
        margin-top:0px;
        margin-bottom:0px;
        margin-right: 0px;
        width: 90px;
        transition: 0.3s;
    }

    & :nth-last-child(1){
        margin-right: 0px;
    }
`

export class index extends Component {
    render() {
        let { image, degree, content, school } = this.props
        return (
            <div className="text-center mt-1">
                <ReactTooltip effect="solid"/>
                <Images>
                <img data-tip={school} src={image} className="mb-3" alt="" srcSet="" />
                </Images>
                <h4>{degree}</h4>
                <p className="mt-3">{content}</p>
            </div>
        )
    }
}

export default index
