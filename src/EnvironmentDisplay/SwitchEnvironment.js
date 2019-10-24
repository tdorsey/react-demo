import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Compare from '@material-ui/icons/Compare';
import WithTooltip from "../Tooltip/WithTooltip"

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
  const tooltip = { title: `Switch to ${props.environment}`,  "aria-label": "switch" }
  const fab = <Fab color="primary" className={classes.fab}> <Compare /> </Fab> 

const FabTooltip = WithTooltip(fab);


  return (
    <div> 
        <FabTooltip color="primary" tooltip={tooltip} className={classes.fab} />
    </div>
  );
}
