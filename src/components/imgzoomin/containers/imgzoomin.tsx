import { compose,withHandlers,withState } from "recompose";
import { IProps } from '../constants/imgzoomin';

export const hoc = compose<IProps, any>(
    withState("isOpen", "setOpenState", false),
    withHandlers({
        zoomIn:(props: IProps)=>{
            return()=>{
                props.setOpenState(true);
                // let imgZoomInDiv = document.getElementById("img-zoom-in-popup") || document.createElement('div');
                // let node = e.target.cloneNode(true);
                // imgZoomInDiv.id = 'img-zoom-in-popup';           
                // imgZoomInDiv.appendChild(node);
                // document.body.appendChild(imgZoomInDiv);
                // imgZoomInDiv.onclick=()=>{
                //     document.body.removeChild(imgZoomInDiv);
                // }
            }
        },
        zoomOut:(props: IProps)=>{
            return()=>{
                props.setOpenState(false);
            }
        },
    })
);