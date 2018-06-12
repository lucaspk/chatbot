"use strict";

var fs = require("fs");

var dataset = JSON.parse(fs.readFileSync('./init.json'));

dataset.forEach(element => {
    element.location = rand(); 
});

fs.writeFileSync('./init2.json', JSON.stringify(dataset), {encoding:'utf-8'});

function rand() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
}
