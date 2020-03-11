const moment = require("moment")

const momentOf = () => {
    const day2 = moment().startOf('isoWeek').day()
    console.log(typeof JSON.stringify(true));
    return day2;
}

console.log(typeof momentOf());
