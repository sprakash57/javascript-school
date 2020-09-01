const moment = require("moment")

const momentOf = () => {
    const date = moment("2020-07-15T18:52:45.195Z").fromNow()
    return date;
}

console.log(momentOf());
