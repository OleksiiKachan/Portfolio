import React, { Component } from 'react';
import classNames from 'classnames';
import './SocialMediaButton.css';

/*
    <SocialMediaButton link='' resource='' />
*/
class SocialMediaButton extends Component {
    render() {
        return (
            <a 
                href={this.props.link} 
                className={classNames('smButton', `smButton_${this.props.resource}`, 'fa', `fa-${this.props.resource}`)}
                target='_blank'>
            </a>
        );
    }
}

export default SocialMediaButton;