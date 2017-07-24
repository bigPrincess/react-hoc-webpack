import * as React from 'react';

import { hoc } from '../containers/http.get.noheader.params';
import { IProps } from '../constants/http';

import '../styles/httpapi.scss';

export class HttpDemoComponent extends React.Component<IProps, any> {
      render() {
        let httpApiData = [{
            props:"title",
            des:"头部中间部分",
            type:"any",
            default:"不传则为无"
        }]
        return (
            <div className="http-api-content">
                <div>
                    <h4>API:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>属性</th>
                                <th>说明</th>
                                <th>类型</th>
                                <th>默认值</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                httpApiData.map((item,index)=>{
                                    return <tr>
                                        <td>{item.props}</td>
                                        <td>{item.des}</td>
                                        <td>{item.type}</td>
                                        <td>{item.default}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export const HttpDemoComponentHoc = hoc(HttpDemoComponent);