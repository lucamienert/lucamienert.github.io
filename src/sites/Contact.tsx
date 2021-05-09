import React, { useEffect } from 'react'
import './css/Contact.css'

import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

import Aos from 'aos'
import 'aos/dist/aos.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
}));

const Contact: React.FC = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration: 2000});
  });
  return (
    <React.Fragment>
      <section className='contact-section' id='contact'>
        <div className='contact-container'>
          <div className="box">
            <h2 data-aos='fade-up' className='contact-header'>Kontakt</h2>
            <Grid container direction='column' alignItems='center'>
              <Grid item xs={12}>
                <form action='send.php' data-aos="fade-up" className={classes.root}>
                  <Grid item>
                    <TextField
                      data-aos="fade-up"
                      id='outlined-basic'
                      variant='outlined'
                      label='Name'
                      inputProps={{min: 0}}/>
                  </Grid>
                  <Grid item>
                    <TextField
                      data-aos="fade-up"
                      id='outlined-basic'
                      variant='outlined'
                      label='Email'
                      inputProps={{min: 0}} />
                  </Grid>
                  <Grid item>
                    <TextField
                      data-aos="fade-up"
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      inputProps={{min: 0}}/>
                    </Grid>
                  <Grid item>
                    <Button
                      data-aos="fade-up"
                      variant='contained'
                      className="main-arrowdown"
                      size='medium'
                      color='primary'
                      endIcon={<ArrowForwardIosIcon />}>
                      Submit
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Contact
