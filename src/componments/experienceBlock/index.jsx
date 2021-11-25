import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 360px;
    margin: 30px auto;
    padding-left: 40px;
    @media screen and (max-width: 768px) {
        padding-left: 20px;
    }
`

const Line = styled.div`
    padding: 5px 0 5px 30px;
    border-left: 3px solid #152238;
`

const DateTime = styled.p`
    position:absolute;
    top: 10px;
    right:380px;
    width:150px;
    text-align:right;
    @media screen and (max-width: 768px) {
        display:none;
    }
`

const Text = styled.div`
    text-align: center;
    width:300px;
    padding: 12px;
    border-radius: 5px;
    border:1px solid #6d6c77;
    margin: 35px 10px;
    position: relative;
    /* font-size:15px; */

    & hr{
        margin-top:10px;
        margin-bottom:3px;
    }

    &:before{
        content: '';
        position: absolute;
        left: -48px;
        top: 8px;
        width: 10px;
        height: 10px;
        border: 2px solid #6d6c77;
        border-radius: 50%;
        background-color: #152238;
    }

    &:after{
        content: '';
        position: absolute;
        left: -18px;
        top: 18px;
        width: 0;
        height: 0;
        border-top: 6px solid transparent;
        border-left: 6px solid transparent;
        border-bottom: 6px solid transparent;
        border-right: 8px solid #152238;
    }
`

const ImageContainer = styled.div`
    position: absolute;
    width:48px;
    top:0px;
    left:-67px;
    
    &>img{
        width:48px;
        top:-15px;
        left:-57px;
        z-index:1;
        background-color: white;
        border-radius: 50%;
    }
`

export class Index extends Component {
    render() {
        let { experiences = [] } = this.props
        return (
            <Container>
                <Line>
                    {experiences.map((data,i) => {
                        return (
                            <Text key={i}>
                                <DateTime>{data.dateTime}</DateTime>
                                <ImageContainer>
                                    <img src={data.image} alt={data.title}/>
                                </ImageContainer>
                                {data.text}
                                <hr />
                                <small>{data.title}</small>
                            </Text>
                        )
                    })}
                </Line>
            </Container>
        )
    }
}

export default Index
