import React, { useEffect } from 'react'
import './css/Home.css'
import { Link } from 'react-scroll'
import { isMobile } from 'react-device-detect'
import { makeStyles } from '@material-ui/core/styles'
import TextTypeWriter from '../components/TextTypeWriter'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { Button, Grid } from '@material-ui/core'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function MobileCheck() {
  if(isMobile) {
    return <div style={{ fontSize: 20, color: 'red' }}> mobile Ansicht wird noch nicht unterstützt </div>
  }
  return null;
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration: 2000});
  });
  return (
    <React.Fragment>
      <main className='main' id='home'>
        <div data-aos='fade-up' className='main-container'>
          <MobileCheck />
          <Grid
            container
            direction="row"
            spacing={1}>
            <Grid item className={classes.root}>
              <TextTypeWriter words={['Hello', 'Hallo']}/>
              <p>Luca Mienert</p>
              <Link className='link-class' to='projects' smooth={true} duration={1000}>
                <Button
                  variant='contained'
                  endIcon={<ArrowDownwardIcon />}
                  className="main-arrowdown"
                  size='medium'
                  style={{
                    background: 'linear-gradient(45deg, #36d1dc 10%, #5b86e5 80%)'
                  }} >
                  Projekte
                </Button>
              </Link>
            </Grid>
          </Grid>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home
