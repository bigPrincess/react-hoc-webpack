import * as React from 'react';

let gradColorFunction = (startColor, endColor, scrollHeight=50, sTop) => {
    let color_reg = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d+)\)$/;
    let currentStop = sTop ? sTop : (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);

    let currentColor;
    let currentOpacity;

    if (!startColor || !endColor) return null;
    let defaultColorNum = (startColor.match(color_reg))[1];
    let endColorNum = (endColor.match(color_reg))[1];
    let colorRatio = Math.abs(defaultColorNum - endColorNum) / scrollHeight;
    let colorNum;

    let defaultOpacityNum = (startColor.match(color_reg))[4];
    let endOpacityNum = (endColor.match(color_reg))[4];
    let opacityRatio = Math.abs(defaultOpacityNum - endOpacityNum) / scrollHeight;

    if (defaultColorNum > endColorNum) {
        colorNum = Number(defaultColorNum - Math.ceil(currentStop * colorRatio)) < Number(endColorNum) ? Number(endColorNum) : (defaultColorNum - Math.ceil(currentStop * colorRatio));
    } else {
        colorNum = Number(defaultColorNum + Math.ceil(currentStop * colorRatio)) > Number(endColorNum) ? Number(endColorNum) : (defaultColorNum + Math.ceil(currentStop * colorRatio));
    }

    if (defaultOpacityNum > endOpacityNum) {
        currentOpacity = Number(defaultOpacityNum - currentStop * opacityRatio) < Number(endOpacityNum) ? endOpacityNum : Number(defaultOpacityNum - currentStop * opacityRatio).toFixed(2);
    } else {
        currentOpacity = Number(defaultOpacityNum + currentStop * opacityRatio) > Number(endOpacityNum) ? endOpacityNum : Number(defaultOpacityNum + currentStop * opacityRatio).toFixed(2);
    }
    currentColor = 'rgba(' + colorNum + ',' + colorNum + ',' + colorNum + ',' + currentOpacity + ')';
    return currentColor;
}

const HeaderColorHoc = (scrollHeight: number, sTop: number, Component: any) => {
    class Hoc extends React.Component<IHeaderColor, any> {
        constructor(props, content) {
            super(props, content);
        }

        render() {
            let props;

            props = Object.assign({}, {
                gradColorFunction: gradColorFunction
            }, this.props);

            return (
                <Component {...props} {...this.props}></Component>
            );
        }
    }

    return Hoc;
}

export const getHeaderHoc = (scrollHeight: number = 100, sTop?: number) => {
    return HeaderColorHoc.bind(null, scrollHeight, sTop);
}

export interface IHeaderColor {
    gradColorFunction?: (startColor: string, endColor: string, scrollHeight?: number, sTop?: number) => string;
    handleScroll?: Function;
    dispatchHeader?: Function;
}