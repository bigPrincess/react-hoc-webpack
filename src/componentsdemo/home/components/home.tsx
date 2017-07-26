import * as React from 'react';
import { Link } from "react-router-dom";

import { hoc } from '../containers/home';
import { IProps } from '../constants/home';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        let accordarr = [
                {
                "name": "公共组件API",
                "submenu": [
                    {
                        "name": "Header插件",
                        "url": "header"
                    },
                    {
                        "name": "http请求",
                        "url": "http"
                    },
                    {
                        "name": "图片点击放大",
                        "url": "imgzoomin"
                    },
                    {
                        "name": "多级折叠菜单",
                        "url": "accordion"
                    },
                    {
                        "name": "icon图标",
                        "url": "icon"
                    }
                ]
            }
        ]
        return (
            <div className="demo-list">
                {/*<div><Link to="/components/header">Header插件 ⇨</Link></div>
                <div><Link to="/components/http">http请求 ⇨</Link></div>
                <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>
                <div><Link to="/components/weixin">微信二次分享 ⇨</Link></div>
                <AccordionComponent title="这个是插件DEMO页哦"/>
                <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>         */}
                
                <AccordionComponent menuArrs={accordarr} eveType = {'click'} title="这个是插件DEMO页哦"/>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);