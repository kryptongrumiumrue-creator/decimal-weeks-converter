const readline = require('readline-sync');

const weeks = Number(readline.question('Enter weeks: '));

const DAYS_PER_WEEK = 7;
const totalDays = Math.floor(weeks * DAYS_PER_WEEK);
const wholeWeeks = Math.floor(totalDays / DAYS_PER_WEEK);
const remainingDays = totalDays % DAYS_PER_WEEK;

const inputUnit = weeks === 1 ? 'week' : 'weeks';
const weeksUnit = wholeWeeks === 1 ? 'week' : 'weeks';
const daysUnit = remainingDays === 1 ? 'day' : 'days';

console.log(`\n${weeks} ${inputUnit} is ${wholeWeeks} ${weeksUnit} and ${remainingDays} ${daysUnit}.`);