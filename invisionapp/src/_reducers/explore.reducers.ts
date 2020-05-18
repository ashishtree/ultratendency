import { ExploreData, Explore } from '../_types_/Explore/Explore';
import { ExploreAction } from '../_types_/actions/ExploreAction';

const initialState: ExploreData = {
    status: 'LOADING',
    exploreData: [],
}

export default(state = initialState, action: ExploreAction): ExploreData => {
    switch(action.type) {
        case 'EXPLORE_LOADING':
            return {
                ...state,
                status: 'LOADING',
                exploreData: [],
            }
        case 'EXPLORE_LOADED':
            const exploreData = (action as ExploreAction).payload.map((explore: Explore): Explore => explore);
            return {
                ...state,
                status: 'LOADED',
                exploreData,
            }
        case 'EXPLORE_UPDATED':
            const payload = (action as ExploreAction).payload;
            const data = {...state};
            data.exploreData.filter((el: any) => { if (el.id === payload) {el.follow = true;} });
            return {
                ...state,
                status: 'LOADED',
            }
        default:
            return state;
    }
}