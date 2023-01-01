
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { TextField } from '@mui/material';
import { TaskArray } from '../contexts/arraycontext';
import { useContext, useState } from 'react';
import * as React from "react"
// import "./tasks.css"
export default function NewTask() {



    const [taskTitle, setTaskTitle] = useState("")
    const [taskex, setTaskex] = useState<any>()
    const [newTask, setNewTask] = React.useState<any>()





    const tasktitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
        console.log(taskTitle)

    }

    const taskexHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskex(e.currentTarget.value)
        console.log(taskex)

    }
    const { value, setValue } = useContext(TaskArray)

    // setNewTask([
    // { tasktilte: taskTitle, taskexp: taskex, id: 2 }
    // ])


    const addHandler = () => {
        setNewTask([
            {
                tasktitle:taskTitle,
                taskexp:taskex,
                id:2
            }
        ])
        setValue(newTask)

    }




    return (
        <>
            <div>{value}</div>
            <Box
                component="div"
                sx={{
                    width: 350,
                    height: 350,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                    },
                    borderRadius: 3
                }}
            >
                <div className='taskcontainer'>
                </div>
                <TextField onChange={tasktitleHandler} id="outlined-basic" label="عنوان تسک" variant="outlined" />
                <TextField onChange={taskexHandler} id="outlined-basic" label="توضیحات" variant="outlined" />
                <div>
                    <Button onClick={addHandler} variant='contained' color='success' style={{ margin: '10px' }} > ثبت</Button>
                </div>
            </Box>
        </>
    );
}