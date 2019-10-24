import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Compare from '@material-ui/icons/Compare';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));


export default function EnvironmentButton(props) {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title={`Switch to ${props.environment}`} aria-label="add">
        <Fab color="primary" className={classes.fab}>
          <Compare />
        </Fab>
      </Tooltip>
    </div>
  );
}
