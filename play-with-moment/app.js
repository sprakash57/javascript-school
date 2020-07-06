const moment = require("moment")

const momentOf = () => {
    const date = moment("2012-07-25T21:27:07.000Z").fromNow()
    return date;
}

console.log(momentOf());
