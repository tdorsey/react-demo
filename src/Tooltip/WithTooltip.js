import React from "react";
import Tooltip from '@material-ui/core/Tooltip';

export default function WithTooltip(Component) {
  return function withTooltip(props) {

  const { tooltip } = props;

    switch(typeof tooltip) {
      case "string":
        return(  
        <Tooltip title={tooltip} children={Component} >
        </Tooltip>
     
      )
        case "object":
          return(
           <Tooltip {...tooltip} children={Component} {...props} />
           
        )
           default:

              console.warn(`Error rendering ${Component}`)
              return(
                Component
        ) 
    }

  }
}

