import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import EnvironmentButton from "./SwitchEnvironment";
import WithTooltip from "../Tooltip/WithTooltip";
import Fab from "@material-ui/core/Fab";
import Compare from "@material-ui/icons/Compare";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(2)
  }
}));

export function EnvironmentDisplay(props) {
  const classes = useStyles();
  const tooltip = { title: "Tooltip as object", placement: "top" };

  const fab = (
    <Fab color="secondary" className={classes.fab}>
      <Compare />
    </Fab>
  );
  const FabTooltip = WithTooltip(fab);

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
      <div>
        <EnvironmentButton environment={props.environment.name} />
      </div>
      <FabTooltip tooltip="Tooltip as Text" /> {/*Use defaults*/}
      <FabTooltip tooltip={tooltip} /> {/* Passthrough props  */}
      <FabTooltip tooltip={true} />
      {/* Intentional failure, will log to console */}
    </div>
  );
}
