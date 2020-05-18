import { getService } from '../_services_/getService';

export const trandsAction = {
    getTrandsData,
}

function getTrandsData(url: string) {
    return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
        try {
            dispatch(trandsLoading());
            const response = await getService.getData(url);
            if (response) {
                dispatch(trandsDataLoaded(response));
            }
        } catch (err) {
            console.log('Error:- ', err);
        }
    }
}

export function trandsLoading() {
    return {
        type: "TRANDS_LOADING",
        payload: []
    }
}

export function trandsDataLoaded(trandsData: any) {
    return {
        type: "TRANDS_LOADED",
        payload: trandsData || [],
    }
}