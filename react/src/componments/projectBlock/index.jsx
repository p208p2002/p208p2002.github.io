/* 
props
    name:str
    content:str
    tags:str list
    links:obj list {name,type,href}
*/

import React, { Component } from 'react'
import styled from 'styled-components';
import LinkButton from './linkButton.jsx'

const BlockContainer = styled.div`
    height:210px;
    padding:0;
    max-width:500px;
`;

const CardBodyContent = styled.div`
    float:left;
    width:${props => props._width};
    padding-right:10px;
    height:100%;
    &:after{
        clear: left;
    }
`

const ImageFrame = styled.div`
    height: 100%; /* Can be anything */
    width: 100%; /* Can be anything */
    position: relative;
`
const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
`

const ButtonLinks = styled.div`
    position: absolute; 
    right:15px;
    bottom: 15px;
    & a{
        margin-right:5px
    }
`

const Tag = styled.span.attrs((props) => {
    return {
        className: props.className,
    }
})`
    margin-right:3px;
`;

export class projectBlock extends Component {
    render() {
        let { tags = [], links = [] } = this.props
        return (
            <BlockContainer className="card">
                <h5 className="card-header">{this.props.name}</h5>
                <div className="card-body" style={{ padding: 10 }}>
                    {/* preview image */}
                    <CardBodyContent _width={'30%'}>
                        <ImageFrame>
                            <Image src={require('../../assets/img/001-cat.png')} />
                        </ImageFrame>
                    </CardBodyContent>
                    <CardBodyContent _width={'70%'}>
                        {/* tags */}
                        {tags.map((t) => {
                            return <Tag className="badge badge-secondary">{t}</Tag>
                        })}
                        <br />

                        {/* content */}
                        <p className="card-text">{this.props.content}</p>

                        {/* button links */}
                        <ButtonLinks>
                            {/* LinkButton type:[web|demo|code]*/}
                            {links.map((link) => {
                                return (
                                    <LinkButton
                                        type={link.type}
                                        href={link.href}>
                                        {link.name}
                                    </LinkButton>
                                )
                            })}
                        </ButtonLinks>
                    </CardBodyContent>
                </div>
            </BlockContainer>
        )
    }
}

export default projectBlock
