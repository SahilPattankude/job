import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Badge } from '../ui/badge'

function AppliedJobs() {
  return (
    <div>
<Table>
    <TableCaption>
        Recent Applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>{

            [1,2,3,4,5].map((item,index)=>(
                <TableRow key={index}>
                    <TableCell>{new Date().toISOString().split('T')[0]}</TableCell>
                    <TableCell>Senior Software Engineer</TableCell>
                    <TableCell>ABC Company</TableCell>
                    <TableCell className="text-right"><Badge>Selected</Badge></TableCell>
                </TableRow>

            ))
            }
        </TableBody>

    </Table>      
    </div>
  )
}

export default AppliedJobs
