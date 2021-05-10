import React from 'react'
import './css/Footer.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    fontSize: 40,
    width: 60,
    height: 60,
  },
});

const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <footer id='footer'>
        <div className='footer-start' />
        <div className='footer-container'>
          <div data-aos="fade-up">
            <a href="https://github.com/lucamienert">
              <IconButton className={classes.root} size='medium' color='primary'>
                <GitHubIcon />
              </IconButton>
            </a>
          </div>
          <div data-aos='fade-up' className="credits">
            <Typography variant='h6'>
              API's benutzt:
            </Typography>
            <Grid 
                container
                direction="column"
                justify="center"
                alignItems="center"
                spacing={1}>
              <Typography variant='body2'>Material UI</Typography>
              <Typography variant='body2'>AOS</Typography>
              <Typography variant='body2'>React Scroll</Typography>
              <Typography variant='body2'>React Device Detect</Typography>
              <Typography variant='body2'>React Simple Typewriter</Typography>
            </Grid>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
