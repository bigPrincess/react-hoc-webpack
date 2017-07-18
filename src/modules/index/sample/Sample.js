import React, {Component} from 'react';
import {Button, Icon} from 'antd-mobile';

import './style.scss';
import img1 from '../../../imgs/favicon.png';
//import Affix from 'antd/lib/affix';

//import Button from 'antd-mobile/lib/button';
export default class Sample extends Component {
  render() {
    return (
      <div>
        <img src={img1} alt="ff"/>
        <Icon type="check"/>
        <Button className="btn" icon="check-circle-o">测试</Button>
      </div>
    );
  }
}
