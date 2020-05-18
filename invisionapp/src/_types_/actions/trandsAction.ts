import { Trands } from '../Trands/Trands';
import { BaseAction } from './BaseAction';

export interface TrandsAction extends BaseAction {
    payload: Trands[];
}