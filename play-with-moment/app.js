const moment = require("moment")

const momentOf = () => {
    const day2 = moment().isoWeek();
    const week = moment().isoWeek(day2).add(1, 'd').format('Do MMM')
    const date = moment().isoWeekday(day2).format('Do MMM')
    console.log(week);
    return date;
}

console.log(momentOf());
