function doFirst(){
    mypic=document.getElementById("coffee1");
    mypic.addEventListener("dragstart", startDrag, false);
   droparea=document.getElementById("addtoshoppingcartsection");
    droparea.addEventListener("dragenter",drageEnter, false);
    droparea.addEventListener("dragleave",drageLeave, false);
    droparea.addEventListener("dragover",function(e){e.preventDefault();} , false);
    droparea.addEventListener("drop",dropped, false);
}

function startDrag(e){
   var imgcode='<img id="coffee1" class="durag" height="200px" width="200px" src="wrappers.jpg" draggable="true"/><figcaption><strong>cofee 1</strong></figcaption>';
   e.dataTransfer.setData('text', imgcode);
}


function dropped(e){
e.preventDefault();
droparea.innerHTML =e.dataTransfer.getData('text')

}

function drageEnter(e){
    e.preventDefault();
    droparea.style.background="#fff8dc";
    droparea.style.border="3px solid #a0522d";
}
function drageLeave(e){
    e.preventDefault();
    droparea.style.background="white";
    droparea.style.border="3px solid black";

}
window.addEventListener("load", doFirst, false );
