import axios from 'axios';
import {useReducer} from 'react';

const ACTIONS ={
    make_request: 'make-request',
    get_data: 'get-data',
    error:'rerror'
}
function reducer(state,action){
switch(action.type){
    case ACTIONS.make_request:
        return {
            loading:true,
            jobs:[]
        }
    case ACTIONS.get_data:
        return {
            ...state,
            loading:false,
            jobs:action.payload.jobs
        }
    case ACTIONS.error:
        return{
            ...state,
            loading:false,
            error:action.payload.error,
            jobs:[]
        }
    default :
    return state
}
}
export default function useFetchJobs(params,page){
    const [state,dispatch] =useReducer(reducer,{jobs:[],loading:true})
    return {
        jobs:[],
        error:true,
        loading:false,
    }
}