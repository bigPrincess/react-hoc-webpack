import * as React from 'react';

import { hoc } from '../containers/accordion';
import { IProps } from '../constants/accordion';
import { AccordionComponent } from "../../../components/accordion/index";

import '../styles/headerapi.scss';

export class AccordionApiComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div >
                <AccordionComponent />
                这个是Header插件api页哦

            </div>
        );
    }
}

export const AccordionApiComponentWithHoc = hoc(AccordionApiComponent);