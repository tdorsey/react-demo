import { default as developmentEnvironment } from "./development";
import { default as productionEnvironment } from "./production";

export { developmentEnvironment as development };
export { productionEnvironment as production };

let developmentRegex = new RegExp(/.*(dev|localhost).*$/);
export default function getEnvironment(theString) {
  if (!theString) {
    theString = window.location.host;
  }
  if (theString.match(developmentRegex)) {
    return developmentEnvironment;
  }
  return productionEnvironment;
}
