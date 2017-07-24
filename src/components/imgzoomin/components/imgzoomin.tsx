import * as  React from 'react';
import { IProps } from '../constants/imgzoomin';
import { hoc } from '../containers/imgzoomin';

import '../styles/imgzoomin.scss';

export class ImgZoomInComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    render(): JSX.Element {
        let props = this.props;
        return (
            <img src={props.imgUrl} onClick={(e)=>props.zoomIn(e)} className={props.className}/>
        );
    }
}

export const ImgZoomInComponentHoc = hoc(ImgZoomInComponent);