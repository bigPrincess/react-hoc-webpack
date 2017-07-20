import { compose} from "recompose";
import { IProps } from '../constants/article';
import { getHeaderHoc } from "../../common/header/index";

export const hoc = compose<IProps, any>(
    getHeaderHoc(),
);