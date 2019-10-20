export { default as development } from "./development.json"  
export { default as production } from "./production.json"


let developmentRegex = new RegExp(/.*dev$/);
export const
    getEnvironment = (theString) => { 


    if (!theString) {
        theString = window.location.host
    }
    if (theString.match(developmentRegex)) {
        return development
    }
    return production
    
}