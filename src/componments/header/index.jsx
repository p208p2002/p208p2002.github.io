import React, { Component } from 'react'
import styled from 'styled-components'

const TitleH1 = styled.h1`
    @media(max-width:768px){
        font-size:28px;
        font-weight:bold
    }
`

export class index extends Component {
    render() {
        return (
            <div style={{ paddingTop: 25 }}>
                {/* desktop */}
                <div className="row d-none d-md-flex text-center">
                    <div className="col">
                        <TitleH1>Philip Huang</TitleH1>
                        <small>You have to believe in yourself. That's the secret of success.</small>
                    </div>
                </div>
                {/* mobile */}
                <div className="d-md-none">
                    <TitleH1>Philip Huang</TitleH1>
                    <small>You have to believe in yourself.</small><br/>
                    <small>That's the secret of success.</small>
                </div>
                <hr />
            </div>
        )
    }
}

export default index
