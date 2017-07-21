import * as React from 'react';

import { hoc } from '../containers/home';
import { IProps } from '../constants/home';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/home.scss';

export class HomeComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div >
                <button onClick={() => { window.location.href = "/components/header" }}>Header插件</button>
                <button onClick={() => { window.location.href = "/components/http" }}>http请求</button>
                 <AccordionComponent
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
                这个是插件DEMO页哦
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);