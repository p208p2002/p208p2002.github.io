import React, { Component } from 'react'
import styled from 'styled-components';

const Link = styled.a`
    @media print{
        display:${(props)=>props.showInPrint===true?"initial":"none"};
        background-color:rgba(0,0,0,0);
        color:black;
        font-size:8px;
        border-color:#152238;
        &:after {
		    content: ': ' attr(href);
        }
    }
`
// showInPrint: controll link show in print mode or not
export class LinkButton extends Component {
    render() {
        let { type, showInPrint=false } = this.props
        let _type = ''
        if (type === 'code')
            _type = 'btn-dark'
        else if (type === 'web')
            _type = 'btn-success'
        else if (type === 'demo')
            _type = 'btn-info'
        else
            _type = type

        return (
            <Link
                showInPrint={showInPrint}
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.href}
                className={`btn btn-sm ${_type}`}>
                {this.props.children || this.props.buttonName}
            </Link>
        )
    }
}

export default LinkButton
