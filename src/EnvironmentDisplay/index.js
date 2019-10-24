import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import EnvironmentButton from "./SwitchEnvironment"
import WithTooltip from "../Tooltip/WithTooltip"
import Fab from "@material-ui/core/Fab"
import Compare from "@material-ui/icons/Compare"
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2),
  }}
  ));




export function EnvironmentDisplay(props) {
  const classes = useStyles();
 
const fab = <Fab color="secondary" className={classes.fab} > 

<Compare />
</Fab>
const FabTooltip = WithTooltip( fab)   ;

  const list = Object.keys(props.environment);
  return (
    <div>
      <ul>
        {list.map(item => (
          <div>
            <li>
              <strong>{item}</strong>
              <div>{props.environment[item]}</div>
            </li>
          </div>
        ))}
      </ul>
      <EnvironmentButton environment={props.environment.name} />
      
      <FabTooltip tooltip={"text"} />
      <FabTooltip tooltip={true}  />

    </div>
  );
}
