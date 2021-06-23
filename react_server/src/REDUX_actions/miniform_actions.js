import Axios from 'axios';

import {
    CHOOSED_MINIFORM

} from './types';

export function chooseMiniform(miniformData){
    // const request = Axios.post(`/api/users/register`,dataToSubmit)
    //     .then(response => response.data);
    
    return {
        type: CHOOSED_MINIFORM,
        payload: miniformData
    }
}


