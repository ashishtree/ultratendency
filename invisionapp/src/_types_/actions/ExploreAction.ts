import { Explore } from '../Explore/Explore';
import { BaseAction } from './BaseAction';

export interface ExploreAction extends BaseAction {
    payload: Explore[];
}