"use strict";

module.exports = function (instance) {
    instance.interceptors.request.use(function (request) {
        request.timingStart = Date.now();
        return request;
    });

    instance.interceptors.response.use(function (response) {
        setResponseTimingData(response);
        return response;
    }, function (error) {
        (error.response) && setResponseTimingData(error.response);
        return Promise.reject(error);
    });
};

const setResponseTimingData = (response) => {
    const timingStart = response.config.timingStart
    const timingEnd = Date.now();
    const elapsedTime = calcElapsedTime(timingStart, timingEnd);

    response.timings = {
        timingEnd,
        timingStart,
        elapsedTime,
    };
};

const calcElapsedTime = (timingStart, timingEnd) => {
    if (timingStart && timingEnd) {
        return Math.round(timingEnd - timingStart);
    }

    return;
};
