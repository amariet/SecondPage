'use strict'

// wait for the window to load and than call back setup()
window.addEventListener('load', setup, false);

var banner;   // the global banner object

const FRAME_RATE=30;
function setup() {
  banner = new Banner();
  window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
}

function draw() {   // the animation loop
    banner.run();
    window.setTimeout(draw, 1000/FRAME_RATE);  // come back here every interval
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
class Banner {

  constructor() {   // from setup()
    //  Banner elements


    //  Canvas Added
    this.canvas =  document.getElementById('bannerCanvas');
    this.canvas.addEventListener("mouseover", handleCanvasMouseOver, false);
    if (!this.canvas || !this.canvas.getContext)
    throw "No valid canvas found!";
    this.context = this.canvas.getContext("2d");
    if(!this.context)
    throw "No valid context found!";
    this.init();
  }

  init(){


  }

  run(){
    
  }



}//#################################  End class


function handleCanvasMouseOver(){


}
