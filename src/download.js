$(document).ready(function(){
    "use strict";
//var fs=require(["/filesystem/impls/filer/BracketsFiler.js"]).fs;
//var BracketsFiler = require("filesystem/impls/filer/BracketsFiler");
//import BracketsFiler from "./filesystem/impls/filer/BracketsFiler"
//var fs=BracketsFiler.proxyFS;

    //your code
    $("#addBtn").click(function(){
        //$("textarea")[0].oninput = function () {
            console.log('button triggered.');
            //fs.readdir('/7/projects/30/index.html');
            /*
          var str = document.getElementById('sync').value;
          var sync = $("#sync").val();
          var transaction = db.transaction(["datastore"],"readwrite");
          transaction.oncomplete = function(event) {
              console.log("Success :)");
              $("#result").html("Add : Success");
          };
          */
    
        });
//var BracketsFiler = 
    
/*define(["one"], function (one, require, exports, module) {
    //"use strict";

    var BracketsFiler   = require("filesystem/impls/filer/BracketsFiler"),

        fs              = BracketsFiler.fs(),
        Path            = BracketsFiler.Path,
        watchers        = {};
    function hello() {
        console.log("inside hello");
        fs.hello();
    }
//requirejs(['filesystem/impls/filer/BracketsFiler.js','fs'], callMe); // the second parameter is the callback
/*
function callMe(BracketsFiler, fs) {
    "use strict";
  console.log('everything is loaded');
  //fs.readdir('/7/projects/30/index.html');
   // the libraries are now available as parameters in the same sequence as in the array
  console.log('loaded');
};



function hello() {
    "use strict";
    console.log('asd');
    define(function(require) {
      //  "use strict";
        var BracketsFiler = require("filesystem/impls/filer/BracketsFiler.js");
        BracketsFiler.readdir('/7/projects/30/index.html');
    });
   
//    var hello = document.querySelector('iframe').contentWindow;
    //var sideMenu = hello.getElementById('project-context-menu-file.download');
    //var hell = hello.addDir('/7/projects/30/index.html');
var iframe = document.querySelector('iframe');
var innerDoc = (iframe.contentDocument) ? iframe.contentDocument : iframe.contentWindow.document;
var downloadLink = innerDoc.getElementById('project-context-menu-file.download');

var two = 2;
    
   console.log(downloadLink);
    //return hello;
};
*/
/*
    $("#addBtn").click(function(){
    //$("textarea")[0].oninput = function () {
        console.log('button triggered.');
        fs.readdir('/7/projects/30/index.html');
        /*
      var str = document.getElementById('sync').value;
      var sync = $("#sync").val();
      var transaction = db.transaction(["datastore"],"readwrite");
      transaction.oncomplete = function(event) {
          console.log("Success :)");
          $("#result").html("Add : Success");
      };
      

    });

});
*/
});