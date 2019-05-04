import React from 'react';
import classNames from 'classnames';
import OutlineButton from '../../OutlineButton';
import './ProjectCard.scss';
import { Link } from 'react-router-dom';

/*
    <ProjectCard
      title=''
      stack=''
      coverImage=''
      className=''
    />
*/

type PropsType = {
  id: string;
  title: string;
  stack: string;
  coverImage: string;
  className?: string;
};

export default ({ id, title, stack, coverImage, className }: PropsType) => {
  return (
    <div
      className={classNames('projectCard', className)}
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className={classNames('projectCard__inner')}>
        <div className={classNames('projectCard__title')}>{title}</div>
        <div className={classNames('projectCard__stack')}>{stack}</div>
        <OutlineButton
          className={classNames('projectCard__button')}
          type="gold"
          onClick={() => {}}
        >
          <Link to={`projects/${id}`}>See More</Link>
        </OutlineButton>
      </div>
    </div>
  );
};
