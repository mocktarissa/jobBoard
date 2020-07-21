import React, { Component } from 'react';
import useFetchJobs from './useFetchJobs';
import {container} from  'react-bootstrap'
function App(){
  const {jobs, loading , error} = useFetchJobs()
  return(
    <container>
      {loading && <h1>Loading ....</h1>}
      {error && <h1>Error Please refresh the page</h1>}
      {jobs.length}
    </container>
  )
}
export default App;