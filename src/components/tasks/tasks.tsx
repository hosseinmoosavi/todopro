
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import {Typography} from '@mui/material';
import "./tasks.css"

export default function BoxSx() {
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
            
            <Typography variant='h5' sx={{width:280,height:70,overflow: 'auto'}} >{}</Typography>
            <Typography sx={{overflow: 'auto',height:150,border:1}} variant="subtitle1" >{}</Typography>
            <Button variant="contained"> Edit</Button>
            <Button sx={{ m: 2 }} variant="outlined" color='error'>Delete</Button>
            </div>

        </Box>
    );
}