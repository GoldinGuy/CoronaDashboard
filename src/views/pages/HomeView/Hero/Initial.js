import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import CitySearch from 'src/components/CitySearch';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '80%',
      height: 'auto',
      transform: 'rotateY(-5deg) rotateX(5deg)',
      backfaceVisibility: 'hidden'
      // boxShadow: theme.shadows[16]
    }
  }
}));

function Initial({ className, ...rest }) {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography variant="overline" color="secondary">
                Coronavirus Information and Action Plan
              </Typography>
              <Typography variant="h1" color="textPrimary">
                Where do you live?
              </Typography>
              <Box mt={3}>
                <Typography variant="body1" color="textSecondary">
                  We'll provide information related to...
                </Typography>
              </Box>
              <Box mt={3}>
                <CitySearch />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box position="relative">
              <div className={classes.image}>
                <img
                  alt="Medical Researchers"
                  src="/static/home/medical_research.svg"
                />
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Initial.propTypes = {
  className: PropTypes.string
};

export default Initial;
