"use strict";
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];
function printWeekDays() {
    console.log("Các ngày trong tuần là:");
    weekDays.forEach((day) => {
        console.log(day);
    });
}
printWeekDays();
