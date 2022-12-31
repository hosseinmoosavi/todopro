
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {Typography} from '@mui/material';
import { TextField } from '@mui/material';
// import "./tasks.css"

export default function NewTask() {

    

const addHandler=()=>{

}

    
    return (
        <Box
        component="div"  
            sx={{
                width: 350,
                height: 350,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                },
                borderRadius:3
            }}
        >
            <div className='taskcontainer'>
            </div>
            <TextField id="outlined-basic" label="عنوان تسک" variant="outlined" />
            <TextField id="outlined-basic" label="توضیحات" variant="outlined" />
            <div>
            <Button onClick={addHandler} variant='contained' color='success' style={{margin:'10px'}} > ثبت</Button>
            </div>
        </Box>
    );
}