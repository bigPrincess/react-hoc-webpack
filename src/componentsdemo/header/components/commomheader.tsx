import * as React from 'react';
import { Link } from "react-router-dom";
import { IProps } from '../constants/headerapi';
import { hoc } from '../containers/commomheader';
import { HeaderComponent } from "../../../components/header/index";
import { ImgZoomInComponent } from "../../../components/imgzoomin/index";

import '../styles/headerapi.scss';

export class CommomHeaderComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="commom-header-demo-content">
                <HeaderComponent
                    currentColor="#eee"
                    currentBgColor="#01a99c"
                    borderColor="#000"
                    className="headerTwotop"
                    title="标题标题"
                    leftComponent={
                        <Link to="/components/header" className="back">
                            返回
                        </Link>
                    }
                    rightComponent={
                        <div>分享</div>
                    } />
                <div className="main-content">
                    <p>具体代码：</p>
                    <ImgZoomInComponent imgUrl="../../assets/images/header_02.png" className="img-zoom-in-btn"/>
                </div>
            </div>
        );
    }
}

export const CommomHeaderComponentWithHoc = hoc(CommomHeaderComponent);