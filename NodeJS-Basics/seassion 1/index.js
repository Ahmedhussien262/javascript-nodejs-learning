// const os = require('node:os');
// console.log(os.platform());

// const fs = require('node:fs');
// const fileContent = fs.readFileSync('./test.txt', 'utf-8');
// console.log(`fileContent: ${fileContent}`);


// const logger = require('./logger');
// logger.log('Hello World');

// const ahmed = require('./logger');
// logger.add(5, 10);

// console.log(__dirname);
// console.log(__filename);

// const logger = require('./logger');
// const logger2= require('./logger');
// const logger3 = require('./logger');

// console.log(require.cache);

import { log, add } from './logger.js';

log('Hello World');
add(5, 10); 



