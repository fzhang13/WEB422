/********************************************************************************* *
WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part
of this assignment has been copied manually or electronically from any other source * (including web
sites) or distributed to other students.
*
* Name: _Felix Xin Song Zhang_ Student ID: _111976171_ Date: _June 10th, 2019_
*
*
********************************************************************************/ 


const data = [];

var viewModel = {
    education: ko.observableArray([])
};

function initializeEducation(){
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: "https://immense-dusk-84099.herokuapp.com/education",
            type: "GET",
            contentType: "application/json"
        })
            .done(function (data) {
                viewModel.education(data);
                resolve();
            })
            .fail(function (err) {
                reject("Error loading eduation");
            });

    });
}

function loadDoc(){
    initializeEducation().then(()=>{
        ko.applyBindings(viewModel, $("body")[0]);
    })
}