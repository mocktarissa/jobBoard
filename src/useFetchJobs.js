import axios from 'axios';
import {useReducer,useEffect} from 'react';
const API_URL=`https://jobs.github.com/positions.json`
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

    useEffect(()=>{
       dispatch({type:ACTIONS.make_request})
       axios.get(API_URL,{params:{markdown:true,page:page,...params}

    }).then(
        res =>{
        
        dispatch({type:ACTIONS.get_data,payload:{jobs: res.data}})
    }
    ).catch(e =>{
        dispatch({type:ACTIONS.error,payload:{error:e}})
    })
           
    }
  ,[params,page])
    return state
}