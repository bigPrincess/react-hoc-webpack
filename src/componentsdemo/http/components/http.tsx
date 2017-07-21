import * as React from 'react';

import { hoc } from '../containers/http';
import { IProps } from '../constants/http';

import '../styles/http.scss';

export class HttpDemoComponent extends React.Component<IProps, any> {
    render() {
        return (
            <div className="http-demo-content">
                <ul>
                    <li>
                        <h2>通过fetch 请求</h2>
                        <div>
                            <h3>请求描述：</h3>
                            <ul>
                                <li>
                                     URL:http://fc-c.dev.rs.com/parameter/loupan<br />
                                </li>
                                <li>
                                     Method:GET<br />
                                </li>
                            </ul>
                        </div>
                        <h3 className="btn" onClick={() => { this.props.http_get_noparam() }}>点击请求</h3>
                        {this.props.http_get_noparam_reault && <div>
                            <h3>结果</h3>
                            <span>{this.props.http_get_noparam_reault}</span>
                        </div>
                        }
                    </li>
                </ul>
            </div>
        );
    }
}

export const HttpDemoComponentHoc = hoc(HttpDemoComponent);