import React, { useState } from 'react';
import Job from './Job'

import useFetchJobs from './useFetchJobs';
import {container} from  'react-bootstrap'
function App(){
  const [params] = useState({})
  const [page, ] = useState(1)
  const {jobs, loading , error} = useFetchJobs(params,page)
  return(
    <container>
      {loading && <h1>Loading ....</h1>}
      {error && <h1>Error Please refresh the page</h1>}
      {
        jobs.map(
          (j)=>(
            <Job key={j.id} job={j}></Job>
          )

        )
      }
    </container>
  )
}
export default App;