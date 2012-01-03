# mill(iseconds) - Readable time for you and other humans.

http://github.com/vesln/mill

## Description
	
mill is simple library for Node.js that makes working with milliseconds more fun.
	
## Synopsis

	var mill = require('mill');
	
	console.log( (10).seconds ); // 10000
	console.log( (1).minute ); // 60000
	console.log( (2).hours ); // 7200000
	console.log( (3).weeks ); // 1814400000
	console.log( (4).months ); // 10518975325.439999
	console.log( (1).year ); // 31556925993.600002
	
	console.log( (1).day + (30).seconds ); // 86430000

## Requirements

- NPM (http://npmjs.org/)
- Node.js 0.6 (http://nodejs.org/)

## Install

	$ npm install mill

## Assumptions

- 1 month = 30.4368499 days
- 1 year = 365.242199 days

## Tests

	$ make test
	
## Inspiration

- should.js
- colors

## License