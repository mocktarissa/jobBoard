import React, { useState } from 'react';
import Job from './Job'
import JobPagination from './JobPagination'
import useFetchJobs from './useFetchJobs';
import {Container} from  'react-bootstrap'
function App(){
  const [params,setParams] = useState({})
  const [page,setPage ] = useState(1)
  const {jobs, loading , error} = useFetchJobs(params,page)
  return(
    <Container className="my-4">
      <h1 className="mb-4">JOB BOARD</h1>
      <JobPagination page={page} setPage={setPage}/>
      {loading && <h1>Loading ....</h1>}
      {error && <h1>Error Please refresh the page</h1>}
      {
        jobs.map(
          (j)=>(
            <Job key={j.id} job={j}></Job>
          )

        )
      }
    </Container>
  )
}
export default App;