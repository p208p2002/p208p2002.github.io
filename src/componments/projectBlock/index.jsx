/* 
props
    name:str
    content:str
    tags:str list
    links:obj list {name,type,href}
    gitRepoName:str
*/

import React, { Component } from 'react';
import styled from 'styled-components';
import LinkButton from './linkButton.jsx';
import ReactLoading from 'react-loading';
import { GoStar, GoRepoForked } from "react-icons/go";
const axios = require('axios');
const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

const BlockContainer = styled.div`
    height:210px;
    padding:0;
    margin-bottom:15px;
`

const CardBodyContent = styled.div`
    float:left;
    width:${(props) => {
        return props._width
    }};
    padding-right:10px;
    height:100%;
    &:after{
        clear: both;
    }
`

const ImageFrame = styled.div`
    height: ${isSafari ? '138px' : '100%'};
    width: ${isSafari ? '138px' : '100%'};
    position: relative;
`
const Image = styled.img`
    border-radius: 10px;
    max-height: ${isSafari ? '110px' : '100%'};
    max-width: ${isSafari ? '110px' : '100%'};
    width: auto;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${isSafari ? '-25px' : '0'};
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

const Status = styled.div`    
    position: absolute;
    right: 10px;
    top: 5px;
    & small{
        margin-left:3px;
    }

    & svg{
        margin-left:5px;
    }
`

export class projectBlock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasGitRepoName: props.gitRepoName ? true : false,
            fetchingRepoStatus: props.gitRepoName ? true : false,
        }
    }

    componentDidMount() {

        let { gitRepoName } = this.props
        if (gitRepoName) {
            axios.get('https://api.github.com/repos/' + gitRepoName)
                .then((res) => {
                    console.log(res.data)
                    let data = res.data
                    let { forks_count, stargazers_count, updated_at } = data
                    this.setState({
                        forks_count,
                        stargazers_count,
                        updated_at
                    })
                })
                .catch(() => {
                    this.setState({
                        hasGitRepoName: false
                    })
                })
                .finally(() => {
                    this.setState({
                        fetchingRepoStatus: false
                    })
                })
        }
    }

    render() {
        let { tags = [], links = [], previewImg = require('../../assets/img/001-cat.png') } = this.props
        let { hasGitRepoName, fetchingRepoStatus, forks_count = 0, stargazers_count = 0 } = this.state
        return (
            <BlockContainer className="card">
                {hasGitRepoName ?
                    <Status>
                        {fetchingRepoStatus ?
                            <ReactLoading type={'spin'} color="balck" height={'20px'} width={'20px'} />
                            :
                            <>
                                <GoStar /> <small>{stargazers_count}</small>
                                <GoRepoForked /> <small>{forks_count}</small>
                                &nbsp;
                            </>
                        }
                    </Status> :
                    <></>}
                <h5 className="card-header" style={{ padding: '10px 12px', fontSize: 16 }}>
                    {this.props.name}
                </h5>
                <div className="card-body" style={{ padding: 10 }}>
                    {/* preview image */}
                    <CardBodyContent _width={'30%'}>
                        <ImageFrame>
                            <Image src={previewImg} />
                        </ImageFrame>
                    </CardBodyContent>
                    <CardBodyContent _width={'70%'}>
                        {/* tags */}
                        {tags.map((t, i) => {
                            return <Tag key={i} className="badge badge-secondary">{t}</Tag>
                        })}
                        <br />

                        {/* content */}
                        <p className="card-text">{this.props.content}</p>

                        {/* button links */}
                        <ButtonLinks>
                            {/* LinkButton type:[web|demo|code]*/}
                            {links.map((link, index) => {
                                let { showInPrint = false } = link
                                return (
                                    <LinkButton
                                        showInPrint={showInPrint}
                                        key={index}
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
