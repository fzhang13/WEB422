/********************************************************************************* *
WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. * No part
of this assignment has been copied manually or electronically from any other source * (including web
sites) or distributed to other students.
*
* Name: _Felix Xin Song Zhang_ Student ID: _111976171_ Date: _May 14th, 2019_
*
*
********************************************************************************/


$( document ).ready(function(){
    console.log("Successfully loaded Jquery");
    $( "#teams-menu" ).on( "click", function(event) {
        event.preventDefault();
        console.log("loading teams...");
        $.get("https://immense-dusk-84099.herokuapp.com/teams")
            .done(function(data){
                $(".well").empty()
                    .append("<h3>Teams<h3>")
                    .append(JSON.stringify(data));
                    console.log("Teams loaded sucessfully");
            });   
    });
    $( "#employees-menu" ).on( "click", function(event) {
        event.preventDefault();
        console.log("loading employees...");
        $.get("https://immense-dusk-84099.herokuapp.com/employees")
            .done(function(data){
                $(".well").empty()
                    .append("<h3>Employees<h3>")
                    .append(JSON.stringify(data));
                    console.log("Employees loaded succesfully");
            });   
    });
    $( "#projects-menu" ).on( "click", function(event) {
        event.preventDefault();
        console.log("loading projectss...");
        $.get("https://immense-dusk-84099.herokuapp.com/projects")
            .done(function(data){
                $(".well").empty()
                    .append("<h3>Projects<h3>")
                    .append(JSON.stringify(data));
                    console.log("Projects loaded successfully");
            });   
    });
    $( "#positions-menu" ).on( "click", function(event) {
        event.preventDefault();
        console.log("loading positions...");
        $.get("https://immense-dusk-84099.herokuapp.com/positions")
            .done(function(data){
                $(".well").empty()
                    .append("<h3>Positions<h3>")
                    .append(JSON.stringify(data));
                    console.log("Positions loaded successfully");
            });   
    });
});

