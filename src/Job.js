import React,{useState} from 'react';
import {Card,Badge, Button, Collapse} from 'react-bootstrap'
import ReactMarkdown from 'react-markdown'
export default function Job({job}){
    var [showDetail,setShowDetail]= useState(false);
    return <Card>
        <Card.Body>
         <div className="d-flex justify-content-between">

             <div>
                 <Card.Title>
                 {job.title}  <span className="text-muted font-weight-light">{job.company}</span>
                 </Card.Title>
                 <Card.Subtitle className="text-muted mb-2">
                     {new Date(job.created_at).toLocaleDateString()}
                 </Card.Subtitle>
                <Badge variant="secondary" className="mr-2">
                    {job.type}
                </Badge>
                <Badge variant="secondary">
                    {job.location}
                </Badge>
                <div style={{wordBreak:'break-all'}}>
                    <ReactMarkdown source={job.how_to_apply}></ReactMarkdown>
                </div>
             </div>
             <img className="d-none d-md-block" alt={job.company} height="50"src={job.company_logo} />
             </div> 
               <Card.Text>
                   <Button onClick={()=>setShowDetail(prev => !prev)} variant="primary">
                       {showDetail? " Hide Details": "View  Details" }
                   </Button>
                   {
                       
                   }
                   <Collapse in={showDetail}>
                   <div className="mt-4">
                     
                       <ReactMarkdown source={job.description}/>
                   </div>
                   </Collapse>
                   
               </Card.Text>
        </Card.Body>
    </Card>
   
}