import React, { Component } from 'react';
imprt useFetchJobs from './useFetchJobs'
function App(){
  const {jobs, loading , error} = useFetchJobs()
}
export default App;