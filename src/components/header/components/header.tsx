import * as  React from 'react';
import { IProps } from '../constants/header';
import { hoc } from '../containers/header';


import '../styles/header.scss';

export class HeaderComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }


    render(): JSX.Element {
        const { title, leftComponent, rightComponent, currentColor, currentBgColor,borderColor } = this.props;
        let currentBorderColor = borderColor || "#f1f1f1";
        return (
            <div className={this.props.className?("m-header "+this.props.className):"m-header"} style={{ background: currentBgColor,borderColor:currentBorderColor}}>
                <div className="m-header-left">{leftComponent}</div>  
                <div className="m-header-center"style={{ color: currentColor }}><div>{title}</div></div>
                <div className="m-header-right">{rightComponent}</div>
            </div>
        );
    }
}

export const HeaderComponentHoc = hoc(HeaderComponent);