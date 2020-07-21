import React, { Component,useState } from 'react';


import useFetchJobs from './useFetchJobs';
import {container} from  'react-bootstrap'
function App(){
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const {jobs, loading , error} = useFetchJobs(params,page)
  return(
    <container>
      {loading && <h1>Loading ....</h1>}
      {error && <h1>Error Please refresh the page</h1>}
      {jobs.length}
    </container>
  )
}
export default App;