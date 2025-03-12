const date1 = new Date('2024-03-19');
const date2 = new Date('2024-03-21');

const diffInMilliseconds = Math.abs(date2 - date1);
const diffInDays = Math.floor(diffInMilliseconds / (24 * 60 * 60 * 1000));

console.log("Input: date1 =", date1.toISOString().split('T')[0], ", date2 =", date2.toISOString().split('T')[0]);
console.log("Output:", diffInDays);