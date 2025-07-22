function compareTime(time1, time2) {
    // Both time1 and time2 should be strings in HH:mm:ss format
    const t1 = new Date(`1970-01-01T${time1}`);
    const t2 = new Date(`1970-01-01T${time2}`);
    return t1 < t2;
}

module.exports = {
    compareTime
}; 