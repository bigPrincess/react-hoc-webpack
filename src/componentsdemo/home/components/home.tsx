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
                 <AccordionComponent title="这个是插件DEMO页哦"/>
            </div>
        );
    }
}

export const HomeComponentHoc = hoc(HomeComponent);