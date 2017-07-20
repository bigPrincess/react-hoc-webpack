import * as React from 'react';

import { hoc } from '../containers/article';
import { IProps } from '../constants/article';
import { HeaderComponent } from "../../common/header/index";

import '../styles/article.scss';

export class ArticleComponent extends React.Component<IProps, any> {
    render() {
        console.log("这个是文章详情页哦");
        console.log(__DEV__);
        
        return (
            <div >
                <HeaderComponent
                    currentColor={this.props.gradColorFunction("rgba(68,68,68,0)", "rgba(68,68,68,1)", 50, 50)}
                    currentBgColor={this.props.gradColorFunction("rgba(255,255,255,0)", "rgba(255,255,255,1)", 50, 50)}
                    borderColor={this.props.gradColorFunction("rgba(228,228,228,0)", "rgba(228,228,228,1)", 50, 50)}
                    title="标题"
                    leftComponent={
                        <div>返回</div>
                    }
                    rightComponent={
                        <div>分享</div>
                    }/>
                这个是文章详情页哦
            </div>
        );
    }
}

export const ArticleComponentWithHoc = hoc(ArticleComponent);