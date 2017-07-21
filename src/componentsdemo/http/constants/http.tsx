import { IProxyHocProps } from '../../../modelproxy/hoc/proxy';

export interface IProps extends IProxyHocProps {
    http_get_noparam?:Function;
    http_get_noparam_reault?:any;
    set_http_get_noparam_reault?:Function;
}
