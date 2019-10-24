import React from "react";
import EnvironmentButton from "./SwitchEnvironment"
export function EnvironmentDisplay(props) {
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
    </div>
  );
}
