[![Build Status](https://secure.travis-ci.org/vesln/mill.png)](http://travis-ci.org/vesln/mill)

# Important Notice

I'm no longer actively maintaining this project. If you are interested supporting it - [ping me on twitter](https://twitter.com/vesln).
The only thing that I will ask you is to not change the API drastically. If you are planning on doing that - better start a brand new project.

If you want me to transfer you only the name on npm, I'd be happy to only if the project **does not have any downloads on npm lately**. In case it's being
downloaded, there are people that depend on it and might step up and start maintaining, so I will not transfer it to you, regardless if you want to release
a new major version etc.

If you have any other questions, let me know.

Thanks!

Veselin

# mill(iseconds) - Readable time for you and other humans.

http://github.com/vesln/mill

## Description
	
mill is simple library for Node.js that makes working with milliseconds more fun.

## Features/Problems

- Extending Number? Yup, I will burn in hell.
	
## Synopsis

JavaScript:

```javascript
var mill = require('mill');

console.log( 10..seconds ); // 10000
console.log( 1..minute ); // 60000
console.log( 2..hours ); // 7200000
console.log( (3).weeks ); // 1814400000
console.log( (4).months ); // 10518975325.439999
console.log( (1).year ); // 31556925993.600002

console.log( 1..day + 30..seconds ); // 86430000
```
	
CoffeeScript:

```coffeescript
require 'mill'

console.log 10.seconds
console.log 1.minute
console.log 2.hours
console.log 3.weeks
console.log 4.months
console.log 1.year
console.log 1.day + 30.seconds
```
	
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

- should.js (https://github.com/visionmedia/should.js)
- colors (https://github.com/Marak/colors.js)

## License

MIT License

Copyright (C) 2012 Veselin Todorov

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
