![npm](https://img.shields.io/npm/v/axios-time)


# axios-timing-plugin
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
const axiosTimingPlugin = require('axios-time');

axiosTimingPlugin(axios);

try {
    const response = await axios.get('/user');
} catch(err) {
}
```

**response.timings.timingStart** - Timestamp of the start of the request (in Unix Epoch milliseconds).

**response.timings.timingEnd** - Timestamp when the response ended (in Unix Epoch milliseconds).

**response.timings.elapsedTime** - Duration of the entire request/response in milliseconds.
