import { compose} from "recompose";
import { IProps } from '../constants/assemblyapi';
import { getHeaderHoc } from "../../../components/header/index";

export const hoc = compose<IProps, any>(
    getHeaderHoc(),
);