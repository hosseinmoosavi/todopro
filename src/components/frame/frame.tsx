import Tasks from "../tasks/tasks"
import { useState } from "react"
import NewTask from "../newtask/newtask"
import { Box } from '@mui/material'
import "./frame.css"
import { TaskArray } from "../contexts/arraycontext"

export default function Frame() {


    return (
        <>
            <TaskArray.Provider value={null}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ margin: '10px' }}>
                        <NewTask name="a" />
                    </div>
                    <div style={{ margin: '10px' }}>

                        <Tasks />
                    </div>
                </Box>
            </TaskArray.Provider>
        </>
    )
}