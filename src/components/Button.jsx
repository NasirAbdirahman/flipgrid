import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


/*
Button Component
*/

//Styling
const StyledButton = styled(Button)({
    backgroundColor:"#ff0000",
    fontWeight:"600",
    borderRadius:"7px",
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#52C752',  
    }
})

const CustomButton = ({ sx, ariaLabel, onClick, children }) => {

  return ( 

    <StyledButton 
        variant="contained"
        onClick={onClick} 
        aria-label={`${ariaLabel}`} 
        sx={{ fontSize: { xs: 14 }, ...sx}}
    >

        {children}
    </StyledButton>

  )
}


export default CustomButton;