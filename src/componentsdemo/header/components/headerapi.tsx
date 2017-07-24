import * as React from 'react';

import { hoc } from '../containers/headerapi';
import { IProps } from '../constants/headerapi';

import '../styles/headerapi.scss';
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";

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
            default:"无"
        }]
        return (
            <div className="header-demo-content">
                <div>
                    <h4>API:</h4>
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
                </div>
                <div>
                    <h4>DEMO:</h4>
                    <p className="demo-title">有渐变的header</p>
                    <ImgZoomInComponent imgUrl="../../assets/images/header_01.png" className="img-zoom-in-btn"/>
                    <p>没有渐变的header</p>
                    <ImgZoomInComponent imgUrl="../../assets/images/header_02.png" className="img-zoom-in-btn"/>
                </div>
            </div>
        );
    }
}

export const HeaderapiComponentWithHoc = hoc(HeaderapiComponent);