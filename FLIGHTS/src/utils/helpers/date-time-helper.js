function compareTime(dateTime1, dateTime2) {
    // Accepts full date-time strings
    return new Date(dateTime1) < new Date(dateTime2);
}

module.exports = {
    compareTime
}; 