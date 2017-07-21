import * as  React from 'react';
import { IProps } from '../constants/accordion';
import { hoc } from '../containers/accordion';


import '../styles/accordion.scss';

export class AccordionComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }


    render(): JSX.Element {
        const { title, leftComponent, rightComponent, currentColor, currentBgColor,borderColor } = this.props;
        let currentBorderColor = borderColor || "#f1f1f1";
        return (
            <div className={this.props.className?("m-accordion "+this.props.className):"m-accordion"} style={{ background: currentBgColor,borderColor:currentBorderColor}}>
                <div className="m-accordion-left">{leftComponent}</div>  
                <div className="m-accordion-center"style={{ color: currentColor }}><div>{title}</div></div>
                <div className="m-accordion-right">{rightComponent}</div>
            </div>
        );
    }
}

export const AccordionComponentHoc = hoc(AccordionComponent);