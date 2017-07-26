import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/home';
import { IProps } from '../constants/home';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="demo-list">
                <div><Link to="/components/header">Header插件 ⇨</Link></div>
                <div><Link to="/components/http">http请求 ⇨</Link></div>
                <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>
                <div><Link to="/components/weixin">微信二次分享 ⇨</Link></div>
                <AccordionComponent title="这个是插件DEMO页哦"/>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);