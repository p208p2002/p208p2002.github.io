import React, { Component } from 'react'

export class LinkButton extends Component {
    render() {
        let { type } = this.props
        let _type = ''
        if(type === 'code')
            _type = 'btn-dark'
        else if(type === 'web')
            _type = 'btn-success'
        else if(type === 'demo')
            _type = 'btn-info'
        else
            _type = type
            
        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href={this.props.href}
                className={`btn btn-sm ${ _type }`}>
                {this.props.children || this.props.buttonName}
            </a>
        )
    }
}

export default LinkButton
