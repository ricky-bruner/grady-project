"use strict";


// universal functions for grabbing elements from the DOM and making new elements
function grabElement(identifier){
    let element = document.querySelector(identifier);
    return element;
}

function makeElement(element){
    let newElement = document.createElement(element);
    return newElement;
}

// BIG function that grabs the body and script and makes a header, main, and footer, then inserts them into the body.
// calls make containers function at the end
function buildDOM(){
    const body = grabElement("body");
    const script = grabElement("script");
    const header = makeElement("header");
    const main = makeElement("main");
    const footer = makeElement("footer");
    body.insertBefore(footer, script);
    body.insertBefore(main, footer);
    body.insertBefore(header, main);
    makeContainers();
}

// grabs the main and inserts three divs into it, each with their own class
function makeContainers(){
    const mainContent = grabElement("main");
    const familyContainer = makeElement("div");
    familyContainer.setAttribute("class", "family-container");
    const titleContainer = makeElement("div");
    titleContainer.setAttribute("class", "title-container");
    const quarterInfo = makeElement("div");
    quarterInfo.setAttribute("class", "quarter-info");
    mainContent.appendChild(quarterInfo);
    mainContent.insertBefore(familyContainer, quarterInfo);
    mainContent.insertBefore(titleContainer, familyContainer);
}

module.exports = buildDOM;