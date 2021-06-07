"use strict";

/**
 * @param {Object} instance
 */
module.exports = function (instance) {
    instance.interceptors.request.use(function (request) {
        request.timingStart = Date.now();
        return request;
    });

    instance.interceptors.response.use(function (response) {
        response.timings = getResponseTimingData(response);

        return response;
    }, function (error) {
        if (error.response){
            error.response.timings = getResponseTimingData(error.response);
        }

        return Promise.reject(error);
    });
};

const getResponseTimingData = (response) => {
    const timingStart = response.config.timingStart;
    const timingEnd = Date.now();
    const elapsedTime = calcElapsedTime(timingStart, timingEnd);

    return {
        timingEnd,
        timingStart,
        elapsedTime,
    };
};

const calcElapsedTime = (timingStart, timingEnd) => {
    if (timingStart && timingEnd) {
        return Math.round(timingEnd - timingStart);
    }
};
