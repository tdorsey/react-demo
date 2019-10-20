import  getEnvironment  from "./environments"

const env = getEnvironment();

const pino = require('pino')
const debug = require('debug');
const pinoDebug = require('pino-debug')
const logName = 'react-demo';

const overrideLogging = () => {

  for ( let level in levels) { 
     console[level] = debug;
   }
}

const buildPinoConfig = () => {
  let config = { name: "demo", level: env.LOG_LEVEL || 'debug'}
  return config
}


const loggerFactory = () => {

	let config = buildPinoConfig()

	let logger = pino(config)
 	return logger
}


const logger = loggerFactory();

pinoDebug(logger, {
  auto: true, // default
  map: {
    'react-demo:*': 'trace',
    'react-demo-lib:*': 'warn',
  },
  skip: [
    'some-other-thing' ]
});

var debugLogger = require('debug')(logName);



const enableDebug = () => {

debug.disable();
debug.enable(`${logName}:*`);


pinoDebug(logger, {
  auto: true, // default
  map: {
    '${logName}:*': 'trace',
    'react-demo-lib:*': 'warn',
    '*': 'silent' // everything else - silent
  }
})


}

if (env.name !== 'production') {

	const logger = loggerFactory();
	enableDebug();
	overrideLogging(true);
}

export const { levels } = ["trace", "debug", "info", "log", "warn", "error"];


export default levels 
