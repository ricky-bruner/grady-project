"use strict";


// const body = document.querySelector("body");
// const script = document.querySelector("script");

// const header = document.createElement("header");
// const main = document.createElement("main");
// const footer = document.createElement("footer");

function grabElement(identifier){
    let element = document.querySelector(identifier);
    return element;
}

function makeElement(element){
    let newElement = document.createElement(element);
    return newElement;
}


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