import { compose,withHandlers, lifecycle,withState} from "recompose";
import { IProps } from '../constants/headerapi';
import { getHeaderHoc } from "../../../components/header/index";

export const hoc = compose<IProps, any>(
    getHeaderHoc(),
    withState("sTop", "setScrollTop", 1),
    withHandlers({
        handleScroll: (props: IProps) => {
            return (e) => {
                let sTop = e.currentTarget.scrollTop || window.pageYOffset || document.body.scrollTop;
                props.setScrollTop(sTop);
            }
        }
    }),
    lifecycle({
        componentDidMount:function(){
            window.addEventListener("scroll", this.props.handleScroll);
        },
        componentWillUnmount: function () {
            //window.removeEventListener("scroll");
        }
    })
);