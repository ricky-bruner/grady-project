"use strict";

let stateQuarters = require("./database.js");

function buildQuarterCards(){
    const quarterDiv = document.querySelector(".quarter-info");
    stateQuarters.forEach((item) => {
        quarterDiv.innerHTML +=
            `<div class="quarter-card">
                <div>
                    <img src="${item.image}" alt="${item.name} State Quarter">
                </div>
                <div>
                    <h3>${item.name}</h3>
                    <h4>Year released: ${item.year}</h4>
                </div>
            </div>`;
    })
}

module.exports = buildQuarterCards;