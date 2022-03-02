import Typography from '@mui/material/Typography';

/*
Typography Components For All Fonts/Styles Used On App
------------------------------------------------------
*/



/* Header Component */
const Header = ({ children, align, sx }) => {

  return (
    <Typography variant="h1" align={align} sx={{fontSize:{sm:"35px",xs:"28px"}, ...sx}}>
      {children}
    </Typography> 
  )
}



/* SubHeader Component */
const SubHeader = ({ children, align, sx }) => {

  return (
    <Typography variant="h2" align={align} sx={{fontSize:{sm:"30px",xs:"24px"},fontWeight:"bold", ...sx}}>
      {children}
    </Typography>
  )
}



/* Title Component */
const Title = ({ children, align, htmlFor, sx }) => {

  return (
    <Typography variant="h3" align={align}htmlFor={htmlFor} sx={{fontSize:{xs:"16px"}, fontWeight:"bold", ...sx}}>
      {children}
    </Typography>
  )
}




/* Paragraph Component */
const Paragraph = ({ children, align, sx }) => {

  return (
    <Typography variant="body1" align={align} sx={{fontSize:{xs:"14px"}, ...sx}}>
      {children}
    </Typography>
  )
}





export { Header, SubHeader , Title, Paragraph };