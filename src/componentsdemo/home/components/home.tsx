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
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    }
                ]
            },
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "submenu": [
                                    {
                                        "name": "四级菜单",
                                        "url": ""
                                    }
                                ]
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            }
                        ]
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "submenu": [
                            {
                                "name": "三级菜单",
                                "submenu": [
                                    {
                                        "name": "四级菜单",
                                        "url": ""
                                    },
                                    {
                                        "name": "四级菜单",
                                        "submenu": [
                                            {
                                                "name": "五级菜单",
                                                "url": ""
                                            },
                                            {
                                                "name": "五级菜单",
                                                "url": ""
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "三级菜单",
                                "url": ""
                            }
                        ]
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    }
                ]
            },
            {
                "name": "一级菜单",
                "submenu": [
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    },
                    {
                        "name": "二级菜单",
                        "url": ""
                    }
                ]
            }
        ]
        return (
            <div className="demo-list">
                <div><Link to="/components/header">Header插件 ⇨</Link></div>
                <div><Link to="/components/http">http请求 ⇨</Link></div>
                <div><Link to="/components/imgzoomin">图片点击放大 ⇨</Link></div>         
                
                <AccordionComponent menuArrs={accordarr} eveType = {'click'} title="这个是插件DEMO页哦"/>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);