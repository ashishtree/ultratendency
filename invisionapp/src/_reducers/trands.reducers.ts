import { TrandsData, Trands } from '../_types_/Trands/Trands';
import { TrandsAction } from '../_types_/actions/trandsAction';

const initialState: TrandsData = {
    status: 'LOADING',
    trandData: [],
}

export default(state = initialState, action: TrandsAction): TrandsData => {
    switch(action.type) {
        case 'TRANDS_LOADING':
            return {
                ...state,
                status: 'LOADING',
                trandData: [],
            }
        case 'TRANDS_LOADED':
            const trandData = (action as TrandsAction).payload.map((trands: Trands): Trands => trands);
            return {
                ...state,
                status: 'LOADED',
                trandData,
            }
        default:
            return state;
    }
}