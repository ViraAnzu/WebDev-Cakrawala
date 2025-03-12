const fullName = "John Doe";
const nameParts = fullName.split(" ");
let initials = "";

for (let i = 0; i < nameParts.length; i++) {
    if (nameParts[i].length > 0) {
        initials += nameParts[i].charAt(0);
    }
}

initials = initials.toUpperCase();

console.log("Input:", fullName);
console.log("Output:", initials);