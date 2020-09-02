'use strict';

const axios = require('axios');
const axiosTime = require('../src/index');
const expect = require('chai').expect;

axiosTime(axios);

describe('testing axios-time package', () => {
    it('should have described timing properties correctly on success', async () => {
        const response = await axios.get('https://httpstat.us/200');
        expect(response.timings).to.have.property('timingEnd').that.is.a('number');
        expect(response.timings).to.have.property('timingStart').that.is.a('number');
        expect(response.timings).to.have.property('elapsedTime').that.is.a('number');
    });
    it('should have described timing properties correctly on error', async () => {
        try {
            await axios.get('https://httpstat.us/500');
        } catch (err) {
            expect(err.response.timings).to.have.property('timingEnd').that.is.a('number');
            expect(err.response.timings).to.have.property('timingStart').that.is.a('number');
            expect(err.response.timings).to.have.property('elapsedTime').that.is.a('number');
        }
    });
    it('should not have response on client error', async () => {
        try {
            await axios.get('127.0.0.1');
        } catch (err) {
            expect(err.response).to.eql(undefined);
            expect(err.message).to.eql('read ECONNRESET');
        }
    });
});
