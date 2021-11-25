import React from 'react';
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    justify-content: center; 
`

const Block = styled.div`
    width:40%;
    margin-left: 12%;
    @media screen and (max-width: 768px) {
        width:85%;
        margin-left: 0%;
    }
`

const Years = styled.small`
    color: gray;
    border: solid #EC7063;
    border-width: 0px 0px 2px 0px;
    display:inline-block;
    margin-bottom:5px;
    padding-bottom: 3px;
`

function Honor(props) {
    let { honor = {} } = props,
        { name, years, detail } = honor
    return (
        <FlexContainer>
            <Block>
                <Years>{years}</Years>
                <p>{name}，{detail}</p>
            </Block>
        </FlexContainer>
    )
}

export default Honor