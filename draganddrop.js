window.alert(5+1);

function addDnDHandlers(){

var coffeeimages=document.getElementsByClassName("productarticlewide");
var shoppingCartDropzone= document.getElementById("shoppingcart");
var shoppingcart=document.querySelectorAll("#shoppingcart ul")[0];
 
for ( var i=0; i< coffeeimages.length; 1++)
 {
coffeeimages[i].addEventListener("dragstart", function (ev)
    {
ev.dataTransfer.effectAllowed="copy";
ev.data.Transfer.setData("text", this.getAttribute("id"));
    },false)

 } 


 shoppingCartDropzone.addEventListener("dragover", function(ev)
 {

    if(ev.preventDefault)
    ev.preventDefault();
    ev.dataTransfer.dropEffect="copy";
    return false;
 }, false);

 shoppingCartDropzone.addEventListener("drop", function(ev)
 {
     if(ev.stopPropagation)
     ev.stopPropagation();
     var coffeeid= ev.dataTransfer.getData("text");
     var element= document.getElementById(coffeeid);
     addCoffeeToShoppingCart(element, coffeeid);
     ev.stopPropagation();
     return false;

 }, false)

function addCoffeeToShoppingCart(item ,id)
{
var html= id + "" + item.getAttribute("data-price");

var liElement=document.createElement("li");
liElement.innerHTML=html;
shoppingcart.apppendChild(liElement);
}



}
