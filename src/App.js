import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Header from './components/Header';
import PatientList from './pages/PatientList';

const useStyles = makeStyles(() => ({
  root: {
    marginLeft: '20vh',
    marginRight: '20vh',
    marginTop: '5vh',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Header />
          <div className={classes.root}>
            <Switch>
              <Route exact path="/:uuid">
                <PatientList />
              </Route>
              <Route exact path="/">
                <PatientList />
              </Route>
            </Switch>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default App;
