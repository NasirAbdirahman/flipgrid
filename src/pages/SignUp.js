import React,{useState} from 'react'
import { Box,Grid,TextField } from '@mui/material';
import { Header, SubHeader, Title, Paragraph } from '../components/Typography';
import Modal from '../components/Modal';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';


/* Sign Up Component */
const SignUp = () => {

    //Navigate Hook
    let navigate = useNavigate();

    //State initialized
    const [values, setValues]= useState({firstName:"", password:"", email:""})
    const [error, setError] =  useState(false)

    //Updating First Name input
    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            firstName: event.target.value,
        }));
    };

    //Updating Email Address input
    const handleEmailInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            email: event.target.value,
        }));
    };

    //Updating Password input
     const handlePasswordInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            password: event.target.value,
        }));
    };

    //Submit Handler
    const handleSubmit = (e) => {
        e.preventDefault()
        //Ensures that Values are given
        if (!values.firstName || !values.email || !values.password) {
          setError(true);
          return;
        } else{
            navigate("/success", { 
                state:{firstName:values.firstName, email:values.email} //Values Passed to Confirmation Page
            });
        }
    }
    
    return (
        <>
            <Modal>

                {/*Header & helper text*/}
                <Grid item>
                    <Header>Let's</Header>
                    <SubHeader>Sign Up</SubHeader>
                    <Paragraph sx={{pt:3}}>
                        Use the form below to sign up for this super awesome<br/>
                        service. You're only a few steps away!
                    </Paragraph>
                </Grid>

                {/*Form Section with Inputs */}
                <Box component="form">
                    <Grid item pt={2.5}>
                        <Title htmlFor="first-name-Input">First Name</Title>
                        <TextField required error={error} helperText={error ? "Value Needed" : null} id="first-name-Input" variant="outlined" size="small" fullWidth sx={{pt:1}} value={values.firstName} onChange={handleFirstNameInputChange}/>
                    </Grid>
                
                    <Grid item pt={1.5}>
                        <Title htmlFor="email-address-Input">Email Address</Title>
                        <TextField required error={error} helperText={error ? "Value Needed" : null} id="email-address-Input" variant="outlined" size="small"  fullWidth sx={{pt:1}}  value={values.email} onChange={handleEmailInputChange}/>
                    </Grid>

                    <Grid item pt={1.5}>
                        <Title htmlFor="password-Input">Password</Title>
                        <TextField required error={error} helperText={error ? "Value Needed" : null} id="password-Input" variant="outlined" size="small" fullWidth sx={{pt:1}} value={values.password} onChange={handlePasswordInputChange}/>
                    </Grid>
                </Box>

                {/*Button*/}
                <Grid container item justifyContent="flex-end" pt={2.5}>
                    <Button onClick={handleSubmit}>Sign Up</Button>       
                </Grid>

            </Modal>
        </>  
    )
}

export default SignUp;