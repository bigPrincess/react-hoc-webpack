import * as React from 'react';

import { hoc } from '../containers/article';
import { IProps } from '../constants/article';

import '../styles/article.scss';

export class ArticleComponent extends React.Component<IProps, any> {
    render() {
        console.log("这个是文章详情页哦");
        console.log(__DEV__);

        return (
            <div >
                <div style={{height:'2000px',padding:'100px 0 0 0'}}>
                    这个是文章详情页哦
                </div>
            </div>
        );
    }
}

export const ArticleComponentWithHoc = hoc(ArticleComponent);