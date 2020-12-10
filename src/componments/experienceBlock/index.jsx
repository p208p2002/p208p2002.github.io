import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 360px;
    margin: 30px auto;
    padding-left: 40px;
`

const Line = styled.div`
    padding: 5px 0 5px 30px;
    border-left: 3px solid #152238;
`

const DateTime = styled.p`
    position:absolute;
    top: 0px;
    right:380px;
    width:150px;
    text-align:right;
`

const Text = styled.div`
    text-align: center;
    width:300px;
    padding: 10px;
    border:1px solid #6d6c77;
    margin: 20px 10px;
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
        top: 7px;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-left: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 10px solid #152238;
    }
`

const ImageContainer = styled.div`
    position: absolute;
    width:48px;
    top:-10px;
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
                                    {data.image}
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
