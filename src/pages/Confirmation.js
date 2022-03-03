import React from 'react'
import { Grid } from '@mui/material';
import { Header, SubHeader, Title, Paragraph } from '../components/Typography';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { useLocation } from 'react-router-dom';

/* Confirmation Component */
const Confirmation = () => {

    //Parameters Passed in from Signup
    const location = useLocation();
    const { firstName, email } = location.state;

    return (
        <>
            <Modal>

                {/*Header & helper text*/}
                <Grid item>
                    <Header>Welcome,</Header>
                    <SubHeader>{firstName}!</SubHeader>
                    <Paragraph sx={{pt:3}}>
                        You have been registered for this awesome service.<br/>
                        Please check your email listed below for instructions.
                    </Paragraph>
                    <Title sx={{pt:3}}>{email}</Title>
                </Grid>

                {/*Button*/}
                <Grid container item justifyContent="flex-end" pt={2.5}>
                    <Button>Sign In</Button>
                </Grid>

            </Modal>
        </>  
    )
}

export default Confirmation;