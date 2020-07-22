import React from 'react';
import {Pagination}from 'react-bootstrap'
export default function JobPagination({page, setPage, hasNextPage}){
    return (
        <Pagination>
        {page!==1 && <Pagination.Prev/>}
        {page!==1 &&  <Pagination.Item >{page-1}</Pagination.Item>}
        {
            page>2 && <Pagination.Item >{1}</Pagination.Item> //always go to 1

        }
        {
            page>2 && <Pagination.Ellipsis/> //to show the ....

        }
        <Pagination.Item active>{page}</Pagination.Item>
        <Pagination.Item >{page+1}</Pagination.Item>
       { hasNextPage && <Pagination.Next/> //only display if element has a net pagenext page 
       } 

        </Pagination>
    )
}