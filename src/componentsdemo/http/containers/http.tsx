import { compose,lifecycle,withState,withHandlers} from "recompose";
import { ModelProxyKeys } from '../constants/index';
import { getProxyHoc } from '../../../modelproxy/hoc/proxy';
import { IProps } from '../constants/http';

export const hoc = compose<IProps, any>(
    getProxyHoc("value"),
    withState("http_get_noparam_reault","set_http_get_noparam_reault",null),
    withHandlers({
        http_get_noparam:(props: IProps) => {
            return()=>{
                 props.execute("value", ModelProxyKeys. api_get_noparam, null)
                 .then((data)=>{
                    console.log(data);
                    props.set_http_get_noparam_reault((value)=>{
                        return JSON.stringify(data);
                    })
                 })
            }
        }
    })
);