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
        let currentFontColor = currentColor || "#444444";
        let currentBorderColor = borderColor || "#f1f1f1";
        let currentBackgroundColor = currentBgColor || "transparent";
        return (
            <div className={this.props.className?("m-header "+this.props.className):"m-header"} style={{ background: currentBackgroundColor,borderColor:currentBorderColor}}>
                <div className="m-header-left" style={{ color: currentFontColor }}>{leftComponent}</div>  
                <div className="m-header-center" style={{ color: currentFontColor }}><div>{title}</div></div>
                <div className="m-header-right" style={{ color: currentFontColor }}>{rightComponent}</div>
            </div>
        );
    }
}

export const HeaderComponentHoc = hoc(HeaderComponent);