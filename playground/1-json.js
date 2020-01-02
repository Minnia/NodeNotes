const fs = require("fs");

const readFile = fs.readFileSync("1-json.json");
const parsedJSON = JSON.parse(readFile);

console.log(parsedJSON);
const newInfo = fs.readFileSync("1-json.json");
const user = JSON.parse(newInfo);
user.name = "Jasmine";
user.age = 23;
const userJSON = JSON.stringify(user);
console.log(userJSON);
fs.writeFileSync("1-json.json", userJSON);
