import * as React from 'react';
import { Link } from "react-router-dom";
import { IProps } from '../constants/headerapi';
import { HeaderComponent } from "../../../components/header/index";
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";

import '../styles/headerapi.scss';

export class CommomHeaderComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="header-demo-content">
                <HeaderComponent
                    currentColor="#000"
                    currentBgColor="#fdd"
                    borderColor="#000"
                    className="headerTwotop"
                    title="标题标题"
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
                    <ImgZoomInComponent imgUrl="../../assets/images/header_02.png" className="img-zoom-in-btn"/>
                </div>
            </div>
        );
    }
}