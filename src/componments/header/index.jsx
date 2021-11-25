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
                <div className="row d-md-flex text-center">
                    <div className="col">
                        <TitleH1>Philip Huang</TitleH1>
                        <small>You have to believe in yourself. That's the secret of success.</small>
                    </div>
                </div>
            </div>
        )
    }
}

export default index
