import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const CopyrightStyle = {
    fontSze: "0.875rem",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "400",
    lineHeight: "1.43",
    letterSpacing: "0.01071em",
    marginTop:"20px"
  }
  
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          potal.hs.ac.kr
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

export default () => {
    return (
        <>
            <Copyright style={CopyrightStyle} />
        </>
    )
}
