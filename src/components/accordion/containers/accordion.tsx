import { compose } from "recompose";

import { IProps } from '../constants/accordion';
// import { getBrowserHoc } from '../../hoc/browser';

export const hoc = compose<IProps, any>(
    // connect(mapStateToProps, mapDispatchToProps),
    // getBrowserHoc(),
    // withReducer("a","dispatch",),  recompose
);