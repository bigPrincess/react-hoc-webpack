import { compose,lifecycle,withState,withHandlers} from "recompose";
import { ModelProxyKeys } from '../constants/index';
import { getProxyHoc } from '../../../modelproxy/hoc/proxy';
import { IProps } from '../constants/http';

export const hoc = compose<IProps, any>(
    getProxyHoc("value"),
    withState("http_reault","set_http_reault",null),
    withHandlers({
        http_get_noheader_noparam:(props: IProps) => {
            return()=>{
                 props.execute("value", ModelProxyKeys. api_get_noheader_noparam, null)
                 .then((data)=>{
                    console.log(data);
                    props.set_http_reault((value)=>{
                        return JSON.stringify(data);
                    })
                 })
            }
        },
        http_get_noheader_param:(props: IProps) => {
            return()=>{
                //直接拼接在url后面直接通过／写 ，如http://fc-c.dev.rs.com/house/houseDetail/1094
                  props.execute("value", ModelProxyKeys.api_get_noheader_param, { params: 1094 })
                  .then((data: any) => {
                    console.log(data);
                    props.set_http_reault((value)=>{
                        return JSON.stringify(data);
                    })
                 })
                // // 放url后面直接通过？然后加参数名字加值 。 如hhttp://fc-c.dev.rs.com/house/houseDetail?loupanId=436
                //  props.execute("value", ModelProxyKeys.api_get_noheader_param, { params: 1094 })
                //   .then((data: any) => {
                //     console.log(data);
                //     props.set_http_reault((value)=>{
                //         return JSON.stringify(data);
                //     })
                //  })
            }
        }
    })
);