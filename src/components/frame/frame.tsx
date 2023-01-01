import Tasks from "../tasks/tasks"
import { useState } from "react"
import NewTask from "../newtask/newtask"
import { Box } from '@mui/material'
import "./frame.css"
import { TaskArray } from "../contexts/arraycontext"

export default function Frame() {
 const [value, setValue]=useState()

    return (
        <>
            <TaskArray.Provider value={{value,setValue}}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ margin: '10px' }}>
                        <NewTask/>
                    </div>
                    <div style={{ margin: '10px' }}>

                        {value.map((value)=>{
                            
                        })

                        }
                    </div>
                </Box>
            </TaskArray.Provider>
        </>
    )
}