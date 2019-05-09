import React from 'react';
import classNames from 'classnames';
import ReactHtmlParser from 'react-html-parser';
import './ParagraphField.scss';

/*
    <ParagraphField
      content=[]
      className=''
    />
*/

type PropsType = {
  content: Array<{
    type: string;
    content?: string;
    header?: string;
    list?: Array<string>;
    images?: Array<{ url: string; alt: string }>;
  }>;
  className?: string;
};

export default ({ content, className }: PropsType) => {
  return (
    <div className={classNames('paragraphField', className)}>
      {content.map(item => {
        switch (item.type) {
          case 'string':
            return (
              <p
                key={content.indexOf(item)}
                className={classNames('paragraphField__content')}
              >
                {ReactHtmlParser(item.content || '')}
              </p>
            );
          case 'list':
            return (
              <div
                key={content.indexOf(item)}
                className={classNames('paragraphField__content')}
              >
                <p className={classNames('paragraphField__listHeader')}>
                  {ReactHtmlParser(item.header || '')}
                </p>
                <ul className={classNames('paragraphField__list')}>
                  {item.list &&
                    item.list.map(listItem => {
                      return (
                        <li
                          key={item.list && item.list.indexOf(listItem)}
                          className={classNames('paragraphField__listItem')}
                        >
                          {ReactHtmlParser(listItem || '')}
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          case 'images':
            return (
              <div
                key={content.indexOf(item)}
                className={classNames(
                  'paragraphField__content',
                  'imageSection'
                )}
              >
                {item.images &&
                  item.images.map(imageItem => {
                    return (
                      <div className={classNames('imageSection__imageItem')}>
                        <img
                          src={imageItem.url}
                          alt={imageItem.alt}
                          className={classNames('imageSection__image')}
                        />
                        <span
                          className={classNames('imageSection__description')}
                        >
                          {imageItem.alt}
                        </span>
                      </div>
                    );
                  })}
              </div>
            );
        }
      })}
    </div>
  );
};
