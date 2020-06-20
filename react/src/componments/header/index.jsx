import React, { Component } from 'react'

export class index extends Component {
    render() {
        return (
            <div style={{paddingTop:10}}>
                {/* desktop */}
                <div className="row d-none d-md-flex text-center">
                    <div className="col">
                        <h1>Philip Huang</h1>
                        <small>You have to believe in yourself. That's the secret of success.</small>
                    </div>
                </div>
                {/* mobile */}
                <div className="d-md-none">
                    <h1>Philip Huang</h1>
                    <small>You have to believe in yourself. That's the secret of success.</small>
                </div>
                <hr/>
            </div>
        )
    }
}

export default index
