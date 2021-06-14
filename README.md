[![NPM Version][npm-image]][npm-url]
![main workflow](https://github.com/PayU/axios-time/actions/workflows/main.yml/badge.svg)
[![NPM Downloads][downloads-image]][downloads-url]
[![Test Coverage][coveralls-image]][coveralls-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![Apache 2.0 License][license-image]][license-url]

# axios-time
Axios plugin to measure the actual time it takes for a request to complete

## Installation
You can install this plugin using **NPM**
```bash
> npm i axios-time
```

## Basic Usage
The example below will add timing data to the request-response cycle.
```js
const axios = require('axios');
const axiosTime = require('axios-time');

axiosTime(axios);

try {
    const response = await axios.get('/user');
} catch(err) {
}
```

response.timings object example:

```js
{
  "timingEnd": 1599035291441,   // Timestamp of the start of the request (in Unix Epoch milliseconds).
  "timingStart": 1599035289182, // Timestamp when the response ended (in Unix Epoch milliseconds).
  "elapsedTime": 2259           // Duration of the entire request/response in milliseconds.
}
```
[npm-image]: https://img.shields.io/npm/v/axios-time.svg?style=flat
[npm-url]: https://npmjs.org/package/axios-time
[coveralls-image]: https://coveralls.io/repos/github/PayU/axios-time/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/PayU/axios-time?branch=master
[downloads-image]: http://img.shields.io/npm/dm/axios-time.svg?style=flat
[downloads-url]: https://img.shields.io/npm/dm/axios-time.svg
[license-image]: https://img.shields.io/badge/license-Apache_2.0-green.svg?style=flat
[license-url]: LICENSE
[snyk-image]: https://snyk.io/test/github/PayU/axios-time/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/PayU/axios-time?targetFile=package.json
