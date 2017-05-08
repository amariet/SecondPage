'use strict'
window.addEventListener('load', setup, false);

function setup(){
  var x = document.getElementsByClassName("buttDiv");

  //  +++++++++++++++++++++++++++++++++++++++  accessing elements

  document.getElementById("headerImage").addEventListener('mouseover', function(){
    this.src = "pup3.png";

  }, false);

  document.getElementById("headerImage").addEventListener('mouseout', function(){
    this.src = "pup2.png";

  }, false);

  //  +++++++++++++++++++++++++++++++++++++++  accessing classes
  for(let i = 0; i < x.length; i++){
    x[i].addEventListener("mouseover", function(){
        this.style.background = "#AA5511";
    }, false)
  }

  for(let i = 0; i < x.length; i++){
    x[i].addEventListener("mouseout", function(){
        this.style.background = "#534385";
    }, false)
  }




}
