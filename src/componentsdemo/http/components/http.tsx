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
                        <h1>1、通过fetch 请求</h1>
                        <div className="operation">
                            <div className="choose-content"> 
                                <label className="choose-title">Method</label>
                                <label className="choose-label"><input name="method" type="radio" value="post" />post </label> 
                                <label className="choose-label"><input name="method" type="radio" value="get" />get </label> 
                            </div>
                            <h3 className="btn" onClick={() => { this.props.http_get_noparam() }}>点击请求</h3>
                        </div>
                        {this.props.http_get_noparam_reault && <div>
                            <h3>请求描述：</h3>
                            <ul className="info">
                                <li>
                                    <span className="info-title">URL:</span>
                                    <span className="info-detail">http://fc-c.dev.rs.com/parameter/loupan</span>
                                </li>
                                <li>
                                    <span className="info-title">Method:</span>
                                    <span className="info-detail">GET</span>
                                </li>
                            </ul>
                        </div>
                        }
                        {this.props.http_get_noparam_reault &&
                            <div className="result">
                                <h3>结果:</h3>
                                <span className="detail">{this.props.http_get_noparam_reault}</span>
                            </div>
                        }
                    </li>
                </ul>
            </div>
        );
    }
}

export const HttpDemoComponentHoc = hoc(HttpDemoComponent);