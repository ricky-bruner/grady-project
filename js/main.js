"use strict";

let buildDOM = require("./buildDOM.js");
let buildQuarterCards = require("./build-quarter-cards.js");
let addQuarters = require("./add-quarters.js");

console.log(buildDOM);
buildDOM();
buildQuarterCards();
addQuarters();