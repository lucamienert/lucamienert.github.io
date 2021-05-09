import React, { useEffect } from 'react'
import './css/Header.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Zoom from '@material-ui/core/Zoom'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import { Link } from 'react-scroll'

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }),
);

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined});
  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props: Props) {
  const { children, window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = ((event.target as HTMLDivElement).ownerDocument || document).querySelector(
      '#home',
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const Header = (props: Props) => {
  useEffect(() => {
    Aos.init({duration: 2000});
  });
  return (
    <React.Fragment>
      <header className="header-class">
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Grid container>
              <Grid item>
                <Typography variant="h6">Luca Mienert</Typography>
              </Grid>
              <Grid item style={{ marginLeft: 'auto'}}>
                <Link className='link-class' to='projects' smooth={true} duration={1000}>
                  <Button
                    size='medium'
                    style={{ marginLeft: 10, background: 'transparent', color: 'white'}}>
                    Projekte
                  </Button>
                </Link>
                <Link className='link-class' to='contact' smooth={true} duration={1000}>
                  <Button
                    size='medium'
                    style={{ marginLeft: 10, background: 'transparent', color: 'white'}}>
                    Kontakt
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      </header>
    </React.Fragment>
  );
}

export default Header
