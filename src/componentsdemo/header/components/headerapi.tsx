import * as React from 'react';

import { hoc } from '../containers/headerapi';
import { IProps } from '../constants/headerapi';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/headerapi.scss';

export class HeaderapiComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div >
                这个是Header插件api页哦

            </div>
        );
    }
}

export const HeaderapiComponentWithHoc = hoc(HeaderapiComponent);