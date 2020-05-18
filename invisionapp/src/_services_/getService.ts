import axios from 'axios';
import { Trands } from '../_types_/Trands/Trands';
import config from '../config/index';

async function getData(url: string): Promise<Trands[]> {
    let apiEndPoint = `${config.getConfig().apihost}${url}`;
    if (!config.getConfig().apihost) {
        apiEndPoint = `http://localhost:3000/${url}`;
    }
    
    const company = await axios.get(apiEndPoint);
    return company.data;
}

export const getService = { getData }