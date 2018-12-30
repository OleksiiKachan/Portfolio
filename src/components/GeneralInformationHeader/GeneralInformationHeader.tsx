import React, { Component } from 'react';
import classNames from 'classnames';
import './GeneralInformationHeader.scss';
import SocialMediaButtonPanel from '../SocialMediaButtonPanel';

/*
    <GeneralInformationHeader generalInformation = {} className='' />
*/
class GeneralInformationHeader extends Component<any, any> {
  render() {
    return (
      <div
        className={classNames('generalInformationHeader', this.props.className)}
      >
        <div
          className={classNames('avatar', 'generalInformationHeader__avatar')}
        >
          <figure className={classNames('avatar__filter')}>
            <img
              alt="Oleksii Kachan"
              src="https://res.cloudinary.com/oleksiikachan/image/upload/v1543467885/portfolio/images/avatar.png"
              className={classNames('avatar__image')}
            />
          </figure>
        </div>
        <div className={classNames('generalInformationHeader_side')}>
          <div
            className={classNames('generalInformationHeader__placeHolder')}
          />
          <div className={classNames('generalInformationHeader__head')}>
            <h1 className={classNames('generalInformationHeader__name')}>
              {this.props.generalInformation.name}
            </h1>
            <h2 className={classNames('generalInformationHeader__position')}>
              {this.props.generalInformation.title}
            </h2>
          </div>
          <SocialMediaButtonPanel
            resources={this.props.generalInformation.resources}
            className={classNames('generalInformationHeader__socialMedia')}
          />
        </div>
      </div>
    );
  }
}

export default GeneralInformationHeader;