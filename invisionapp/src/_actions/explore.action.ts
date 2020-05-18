import { getService } from '../_services_/getService';

export const exploreAction = {
    getExploreData,
    updateExploreData,
}

function getExploreData(url: string) {
    return async (dispatch: (arg0: {type: string; payload: any}) => void) => {
        try {
            dispatch(exploreLoading());
            const response = await getService.getData(url);
            if (response) {
                dispatch(exploreDataLoaded(response));
            }
        } catch (err) {
            console.log('Error:- ', err);
        }
    }
}

export function updateExploreData(id: number) {
    return {
        type: "EXPLORE_UPDATED",
        payload: id
    }
}

export function exploreLoading() {
    return {
        type: "EXPLORE_LOADING",
        payload: []
    }
}

export function exploreDataLoaded(exploreData: any) {
    return {
        type: "EXPLORE_LOADED",
        payload: exploreData || [],
    }
}