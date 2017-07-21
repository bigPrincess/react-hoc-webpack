import * as React from 'react';
import { render } from 'react-dom';
import { RouterComponent } from '../../router';
//import { ArticleComponent} from '../article';
console.log(<RouterComponent />)
render( 
    <RouterComponent /> ,
    document.getElementById('application'),
    () => {

    });