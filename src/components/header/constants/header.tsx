export interface IProps {
    /**
     * 头部中间部分
     */
    title?: string | JSX.Element;

    /**
     * 头部左边部分
     */
    leftComponent?: JSX.Element;

    /**
     * 头部右边部分
     */
    rightComponent?: JSX.Element;

    /**
     * 头部当前背景颜色
     */
    currentBgColor?:string;

    /**
     * 头部当前颜色
     */
    currentColor?:string;
    /**
     * 头部边框颜色
     */
    borderColor?:string;
    /**
     * 头部className
     */
    className?:string;
}