'use strict';

const axios = require('axios');
const axiosTimingPlugin = require('../src/index');
const expect = require('chai').expect;

axiosTimingPlugin(axios);

describe('testing axios-time package', () => {
    it('should have described timing properties correctly', async () => {
        const response = await axios.get('http://ynet.co.il');
        expect(response.timings).to.have.property('timingEnd').that.is.a('number');
        expect(response.timings).to.have.property('timingStart').that.is.a('number');
        expect(response.timings).to.have.property('elapsedTime').that.is.a('number');
    });
});
