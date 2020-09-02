![npm](https://img.shields.io/npm/v/axios-time)


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
