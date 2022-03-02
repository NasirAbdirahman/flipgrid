import React from 'react'
import { Paper, Box, Grid,TextField } from '@mui/material';
import { Header, SubHeader, Title, Paragraph } from '../components/Typography';
import Modal from '../components/Modal';
import Button from '../components/Button';


/* Sign Up Component */
const SignUp = () => {

    return (
        <>
            <Modal>
                <Grid item>
                    <Header>Let's</Header>
                    <SubHeader>Sign Up</SubHeader>
                    <Paragraph sx={{pt:3}}>
                        Use the form below to sign up for this super awesome<br/>
                        service. You're only a few steps away!
                    </Paragraph>
                </Grid>
              

                

                <Grid item pt={2.5}>
                    <Title htmlFor="first-name-Input">First Name</Title>
                    <TextField id="first-name-Input" variant="outlined" size="small" required fullWidth sx={{pt:1}} color="warning"/>
                </Grid>
            
                <Grid item pt={1.5}>
                    <Title htmlFor="email-address-Input">Email Address</Title>
                    <TextField name="email" id="email-address-Input" variant="outlined" size="small" required fullWidth sx={{pt:1}} color="warning"/>
                </Grid>

                <Grid item pt={1.5}>
                    <Title htmlFor="password-Input">Password</Title>
                    <TextField id="password-Input" variant="outlined" size="small" required fullWidth sx={{pt:1}} color="warning"/>
                </Grid>

                <Grid container item justifyContent="flex-end" pt={2.5}>
                    <Button>Sign Up</Button>
                </Grid>
                 
            </Modal>
        </>  
    )
}

export default SignUp