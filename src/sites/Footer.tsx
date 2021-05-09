import React from 'react'
import './css/Footer.css'

import IconButton from '@material-ui/core/IconButton'
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

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
            <IconButton className={classes.root} size='medium' color='primary'>
              <GitHubIcon />
            </IconButton>
          </div>
          <div className="credits">
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default Footer
