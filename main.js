/*********************************************************************************
*  WEB422 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Md Nuhel Nawaz Chowdhury Student ID: 109455162 Date: 09/12/2018
*  Heroku link:  https://rocky-fortress-77320.herokuapp.com/teams
*
********************************************************************************/ 

const urlString = "https://safe-tor-42217.herokuapp.com/";
$(document).ready(function(){ // start jQuery
    // request data to REST server with jQuery-ajax
    $(".dropdown-menu").on("click", ".data-menu", function(e) {

        // Prevent a link from opening the URL
        e.preventDefault();

        $this = $(this);

        $.ajax({
            // according to data-query type, request data to REST
            url: urlString + $this.attr("data-query"),
            method: "GET",
            contentType: "application/json"
        })
        .done(function(data) {
            $("#data").empty();
            $("#data").html("<h3>" + $this.text() + "</h3>");
            $("#data").append(JSON.stringify(data));
        })
        .fail(function(err){
            console.log("error: " + err.statusText);
        });
    });
});