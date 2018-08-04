"use strict";

function addQuarters(){
    let quarterDiv = document.querySelector(".quarter-info");
    quarterDiv.innerHTML +=
    `<div class="add-section">
        <button class="add-quarter-btn">Add a Quarter!</button>
    </div>`;
    // let addQuarterBtn = document.querySelector(".add-quarter-btn");
    let addSection = document.querySelector(".add-section");
    function showForm(){  
        console.log("i got here", addSection);  
        addSection.innerHTML +=
        `<form>
            <h3>Fill in details</h3>
            <input placeholder="Name of State">
            <input placeholder="Year Released">
            <input placeholder="url of image">
            <button class="submit-btn">Submit</button>
        </form>`;
    }
    quarterDiv.addEventListener("click", (e) => {
        if(e.target.className === "add-quarter-btn"){
            showForm();
        }
    });
}

module.exports = addQuarters;