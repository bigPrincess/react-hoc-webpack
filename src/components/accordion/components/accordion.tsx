import * as  React from 'react';
import { IProps } from '../constants/accordion';
import { hoc } from '../containers/accordion';
// import { Link } from 'react-router-dom';


import '../styles/accordion.scss';

export class AccordionComponent extends React.Component<IProps, any>{
    constructor(props, content) {
        super(props, content);
    }
    renderFunc(menuarrs,accData){
        this.renderClickItem();
       return  this.renderCreateMenu(menuarrs,accData);
    }
    
    /**
	 * 创建一级菜单栏
	 */
    renderCreateMenu(menuarrs,accData) {
        let own = this;

        return (
            <ul>
                {
                    menuarrs.map(function (key, index) {
                        return (
                                <li>
                                    <div className="link"><span className='menu-name'>{key.name}</span>  <i className="fa fa-chevron-down"></i></div>
                                    {(key && key.submenu.length >= 1) ? own.renderCreateSubMenu(key.submenu) : null}
                                </li>
                            )
                    })
                }
            </ul>
        )
    }

    /**
	 * 创建submenu菜单栏
	 */
    renderCreateSubMenu(SubMenu) {
        let own = this;
        return (
            <ul>
                {
                    SubMenu.map(function (key, index) {
                        return (
                            <li>
                                <div className="link"><span className='menu-name'>{key.name}</span>  <i className="fa fa-chevron-down"></i></div>
                                {(key.submenu && key.submenu.length >= 1) ? (own.renderCreateSubMenu(key.submenu)) : null}
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

	/**
	 * 添加层级标识
	 */
	renderLevelIndent(ulList){
		// let own = this,
	   
		// let initTextIndent = 2,
		// 	lev = 1;
			// $oUl = $(ulList);
		
		// while($oUl.find('ul').length > 0){
		// 	initTextIndent = parseInt(initTextIndent,10) + 2 + 'em'; 
		// 	$oUl.children().children('ul').addClass('lev-' + lev)
		// 				.children('li').css('text-indent', initTextIndent);
		// 	$oUl = $oUl.children().children('ul');
		// 	lev++;
		// }
		// $(ulList).find('ul').hide();
		// $(ulList).find('ul:first').show();	
	}
	/**
	 * 点击折叠效果
	 */
	renderClickItem() {
		// let own = this,
        let accordion = document.getElementById('accordion');
        let list = document.getElementsByTagName("li");
        // accordion.addEventListener("click",function(){alert("你好！")});
        //  var list=document.getElementsByTagName("li");
        let  reg = new RegExp('(\\s|^)' + 'active' + '(\\s|$)');  
        console.log(list);
        console.log(list.length);
        console.log(list[0]);
        for (let i = 0; i < list.length; i++) {
        console.log(i);
                list[i].onclick=function(){
                    //获取当前点击的li元素是否有子菜单,有这展开子菜单,没有则添加跳转链接跳转页面                    
                    let submenu = list[i].getElementsByTagName('ul');
                    if(submenu.length>0) {
                        //判断当前li元素是否有class名为'active'
                        if(this.className.match(reg)){
                            this.className += " " + 'active';
                        } else {
                            this.className = this.className.replace(reg, ' '); 
                        }
                        alert(submenu.length);
                    } else {

                    }
                };
        }
	}

    // render(): JSX.Element {
    render() {
        let accData = this.props;
        let menuArrs  =  accData.menuArrs || '';
        let eveType  =  accData.eveType || 'click';
        console.log(menuArrs);
        // const { title, leftComponent, rightComponent, currentColor, currentBgColor,borderColor } = this.props;
        // let currentBorderColor = borderColor || "#f1f1f1";
        return (
            <div id="accordion" className="m-accordion" style={{}}>
                {(menuArrs && menuArrs.length >= 1) ? this.renderFunc(menuArrs,accData) : null}
            </div>
        );
    }
}

export const AccordionComponentHoc = hoc(AccordionComponent);