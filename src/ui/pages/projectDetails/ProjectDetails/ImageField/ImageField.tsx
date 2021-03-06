import React from 'react';
import classNames from 'classnames';
import './ImageField.scss';

/*
    <ImageField
      image=''
      className=''
    />
*/

type PropsType = {
  image: string;
  className?: string;
};

export default ({ image, className }: PropsType) => {
  return (
    <div className={classNames('imageField', className)}>
      <img
        src={image}
        alt=""
        className={classNames('imageField__imageSlide')}
      />
      <div className={classNames('imageField__imageShader')} />
    </div>
  );
};
