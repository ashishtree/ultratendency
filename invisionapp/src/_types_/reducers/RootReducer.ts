import { TrandsData } from '../Trands/Trands';
import { ExploreData } from '../Explore/Explore';

export interface RootReducerState {
    trandsReducer: TrandsData;
    exploreReducer: ExploreData;
}