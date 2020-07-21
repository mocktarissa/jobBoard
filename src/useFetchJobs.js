import axios from 'axios';
import {useReducer} from 'react'
export default function useFetchJobs(params,page){
    const [state,dispatch] =useReducer(reducer,{jobs:[],loading:true})
    return {
        jobs:[],
        error:true,
        loading:false,
    }
}