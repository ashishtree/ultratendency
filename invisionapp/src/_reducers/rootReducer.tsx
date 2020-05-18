import { combineReducers, Reducer } from 'redux';
import { TrandsAction } from '../_types_/actions/trandsAction';
import { ExploreAction } from '../_types_/actions/ExploreAction';
import { RootReducerState } from '../_types_/reducers/RootReducer';
import trandsReducer from './trands.reducers';
import exploreReducer from './explore.reducers';


const rootReducer: Reducer<
    RootReducerState
    | TrandsAction
    | ExploreAction
> = combineReducers({ 
    trandsReducer,
    exploreReducer
});

export default rootReducer;