import React, { useEffect } from 'react'
import './css/Projects.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      margin: 'auto',
      marginTop: 100
    },
});

const Projects: React.FC = () => {
  const classes = useStyles();
  useEffect(() => {
    Aos.init({duration: 2000});
  });
  return (
    <React.Fragment>
      <section className="projects-section" id='projects'>
        <div className='projects-container'>
          <h2 data-aos="fade-up" className='projects-header'>Projekte</h2>
          <div className='projects-wrapper'>
            <div className="grids">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}>
                <Grid item>
                  <div data-aos="fade-up" className="box1">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          alt='React Website'
                          height='140'
                          image='https://via.placeholder.com/150'
                          title='React Website' />
                        <CardContent>
                          <Typography gutterBottom variant='h5' component='h2'>
                            React Website
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>
                            Portfolio Website, erstellt mit Typescript und ReactJS
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size='small' color='primary'>
                          Github
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </Grid>
                <Grid item>
                  <div data-aos="fade-up" className="box2">
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          component='img'
                          alt='TLA'
                          height='140'
                          image='https://via.placeholder.com/150'
                          title='TLA' />
                        <CardContent>
                          <Typography gutterBottom variant='h5' component='h2'>
                            TLA
                          </Typography>
                          <Typography variant='body2' color='textSecondary' component='p'>
                            Einfache Programmiersprache, die ich programmiert habe
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button size='small' color='primary'>
                          Github
                        </Button>
                        <Button size='small' color='primary'>
                          Mehr
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects
