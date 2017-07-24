import { compose,withHandlers } from "recompose";
import { IProps } from '../constants/imgzoomin';

export const hoc = compose<IProps, any>(
    withHandlers({
        zoomIn:(props: IProps)=>{
            return(e)=>{
                let imgZoomInDiv = document.getElementById("img-zoom-in-popup") || document.createElement('div');
                let node = e.target.cloneNode(true);
                imgZoomInDiv.id = 'img-zoom-in-popup';           
                imgZoomInDiv.appendChild(node);
                document.body.appendChild(imgZoomInDiv);
                imgZoomInDiv.onclick=()=>{
                    document.body.removeChild(imgZoomInDiv);
                }
            }
        },
    })
);