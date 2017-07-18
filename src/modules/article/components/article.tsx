import * as React from 'react';

import { hoc } from '../containers/article';
import { IProps } from '../constants/article';

import '../styles/article.scss';

export class ArticleComponent extends React.Component<IProps, any> {
    render() {
      console.log("这个是文章详情页哦");
        return (
            <div >
                这个是文章详情页哦
            </div>
        );
    }
}

export const ArticleComponentWithHoc = hoc(ArticleComponent);