import * as React from 'react';
import { Link } from "react-router-dom";
import { IProps } from '../constants/headerapi';
import { HeaderComponent } from "../../../components/header/index";
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";

import '../styles/headerapi.scss';

export class GradHeaderComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="header-demo-content">
                <HeaderComponent
                    currentColor={this.props.gradColorFunction("rgba(68,68,68,0)", "rgba(68,68,68,1)", 50, this.props.sTop)}
                    currentBgColor={this.props.gradColorFunction("rgba(255,255,255,0)", "rgba(255,255,255,1)", 50, this.props.sTop)}
                    borderColor={this.props.gradColorFunction("rgba(228,228,228,0)", "rgba(228,228,228,1)", 50, this.props.sTop)}
                    title="标题"
                    leftComponent={
                        <div>返回</div>
                    }
                    rightComponent={
                        <div>分享</div>
                    } />
                <Link to="/components/header" className="back">
                     返回demo主页面
                </Link>
                <div>
                    <p>具体代码：</p>
                    <ImgZoomInComponent imgUrl="../../assets/images/header_01.png" className="img-zoom-in-btn"/>
                </div>
            </div>
        );
    }
}