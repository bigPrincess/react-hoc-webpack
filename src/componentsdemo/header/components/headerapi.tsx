import * as React from 'react';
import { Link } from "react-router-dom";
import { hoc } from '../containers/headerapi';
import { IProps } from '../constants/headerapi';

import '../styles/headerapi.scss';

export class HeaderapiComponent extends React.Component<IProps, any> {
    render() {
        let headerApiData = [{
            props:"title",
            des:"头部中间部分",
            type:"any",
            default:"不传则为无"
        },{
            props:"leftComponent",
            des:"头部左边部分",
            type:"any",
            default:"不传则为无"
        },{
            props:"rightComponent",
            des:"头部右边部分",
            type:"any",
            default:"不传则为无"
        },{
            props:"className",
            des:"头部class名",
            type:"string",
            default:"无"
        },{
            props:"currentColor",
            des:"头部字体颜色",
            type:"string",
            default:"#444444"
        },{
            props:"currentBgColor",
            des:"头部背景颜色",
            type:"string",
            default:"transparent"
        },{
            props:"borderColor",
            des:"头部下边框颜色",
            type:"string",
            default:"#f1f1f1"
        },{
            props:"gradColorFunction",
            des:"头部渐变方法",
            type:"(startColor: string, endColor: string, scrollHeight?: number, sTop?: number) => string",
            default:"具体见渐变函数的api"
        }]
        let gradApiData = [{
            props:"startColor",
            des:"渐变初始时颜色",
            type:"string",
            default:"不传则为无 例： rgba(68,68,68,0)"
        },{
            props:"endColor",
            des:"渐变结束时颜色",
            type:"string",
            default:"不传则与startColor相同"
        },{
            props:"scrollHeight",
            des:"滑动到某个值时渐变停止",
            type:"number",
            default:"50"
        },{
            props:"sTop",
            des:"实时滑动的距离",
            type:"number",
            default:"不传则为无"
        }]
        return (
            <div className="header-demo-content">
                <Link to="/components" className="back">
                     返回demo主页面
                </Link>
                <div>
                    <h4>header API:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                headerApiData.map((item,index)=>{
                                    return <tr>
                                        <td>{item.props}</td>
                                        <td>{item.des}</td>
                                        <td>{item.type}</td>
                                        <td>{item.default}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <h4>渐变函数 API:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                gradApiData.map((item,index)=>{
                                    return <tr>
                                        <td>{item.props}</td>
                                        <td>{item.des}</td>
                                        <td>{item.type}</td>
                                        <td>{item.default}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <h4>DEMO:</h4>
                    <Link to="/components/header/gradHeader" className="demo-title">
                        点击查看 有渐变的header 的demo
                    </Link>
                    <br/>
                    <Link to="/components/header/commomHeader" className="demo-title">
                        点击查看 没有渐变的header 的demo
                    </Link>
                </div>
            </div>
        );
    }
}

export const HeaderapiComponentWithHoc = hoc(HeaderapiComponent);