import React from 'react'
import './css/Home.css'
import { Link } from 'react-scroll'
import { isMobile } from 'react-device-detect'
import TextTypeWriter from '../components/TextTypeWriter'

import 'aos/dist/aos.css'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function MobileCheck() {
  if(isMobile) {
    return <div style={{ fontSize: 20, color: 'red' }}> mobile Ansicht wird noch nicht unterstützt </div>
  }
  return null;
}

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <main className='main' id='home'>
        <div className='main-container'>
          <MobileCheck />
          <Grid
            container
            direction="row"
            spacing={1}>
            <Grid item>
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
