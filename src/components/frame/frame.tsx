import Tasks from "../tasks/tasks"
import { useState } from "react"
import NewTask from "../newtask/newtask"
import {Box} from '@mui/material'
import "./frame.css"

export default function Frame() {

    


    return (
        <>
            <Box sx={{display:'flex', flexDirection: 'row'}}>
                <div style={{margin:'10px'}}>
                    <NewTask />
                </div>
                <div style={{margin:'10px'}}>

                <Tasks />
                </div>
            </Box>
        </>
    )
}