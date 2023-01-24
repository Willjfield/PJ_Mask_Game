// Make the DIV element draggable:
dragElement(document.getElementById("gekko"));
dragElement(document.getElementById("catboy"));
dragElement(document.getElementById("owlette"));
dragElement(document.getElementById("robot"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
  //if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    //document.getElementById(elmnt.id + "header").onpointerdown = dragMouseDown;
 // } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onpointerdown = dragMouseDown;
  //}

  function dragMouseDown(e) {
   
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onpointerup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onpointermove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    let y = (elmnt.offsetTop - pos2);
    let x = (elmnt.offsetLeft - pos1);
   
    elmnt.style.top =  y + "px";
    elmnt.style.left = x + "px";

    console.log(x,y)

    let targetGekkoX= 619;
    let targetGekkoY=116;

    let targetCatboyX=481;
    let targetCatboyY=80;

    let targetOwletteX=885;
    let targetOwletteY=118;

    let threshold = 100;

    if(Math.abs(x-targetGekkoX)<threshold && Math.abs(y-targetGekkoY)<threshold && elmnt.id === "gekko"){
     reveal("gekko")
    }
    if(Math.abs(x-targetCatboyX)<threshold && Math.abs(y-targetCatboyY)<threshold && elmnt.id === "catboy"){
       reveal('catboy')
    }
    if(Math.abs(x-targetOwletteX)<threshold && Math.abs(y-targetOwletteY)<threshold && elmnt.id === "owlette"){
      reveal('owlette')
    }
  }
  function reveal(_name){
    console.log(_name)
    document.getElementById("hero-"+_name).classList.add("reveal-"+_name);
    document.getElementById(_name).style.display = "none"
    document.getElementById("person-"+_name).style.display = "none"

  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onpointerup = null;
    document.onpointermove = null;
  }
}