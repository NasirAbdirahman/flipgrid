import React from 'react'
import { Paper, Grid } from '@mui/material';



/*Modal Component */
const Modal = ({children}) => {
    return (
        <>
            <Grid container justifyContent="center" alignItems="center" minHeight="100vh" minWidth="100vw">

                <Grid item md={4}>
                    <Paper elevation={3} sx={{p:3.5, borderRadius:"10px"}}>
                        {children}
                    </Paper>
                </Grid>
                
            </Grid>
        </>
    )
}

export default Modal