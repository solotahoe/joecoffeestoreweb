function dosecond(){
var coffeeimages=document.getElementsByClassName("productarticlewide");
var shoppingcartdiv=document.getElementById("shoppingcart");
var shoppingdropzone=document.querySelectorAll("#addtoshoppingcartsection")[0];

for (var i=0; i<coffeeimages.length; i++){
coffeeimages[i].addEventListener("dragstart", function(ev){
    ev.dataTransfer.effectAllowed="copy";
ev.dataTransfer.setData("Text",this.getAttribute("id"));}, false)

}
shoppingdropzone.addEventListener("dragover", function(ev) {
    if (ev.preventDefault)
    ev.preventDefault();
    ev.dataTransfer.dropEffect="copy";
    return false;
},false)

shoppingdropzone.addEventListener("drop", function(ev){
if(ev.stopPropagation)
ev.stopPropagation();

var coffeeId=ev.dataTransfer.getData("text");
var element=document.getElementById(coffeeId);

addCoffeeToShoppingCart(element, coffeeId);
ev.stopPropagation();
return false;
},false);


function addCoffeeToShoppingCart(item, id){
    
    
var html = id + " " + "price=" + item.getAttribute("data-price");
var liElement =document.createElement('li');
liElement.innerHTML =html;
shoppingdropzone.appendChild(liElement);

   
}
  
/*
function createEmptyCart(){
    localStorage.clear();
    localStorage.setItem("cart", JSON.stringify(new cart()));
    currentCart=JSON.parse(localStorage.getItem("cart"));
}

function updateShoppingCartUI(){
    shoppingcart.innerHTML="";
    for (var i=0; i<currentCart.coffees.length; i++){
        var liElement=document.createElement('li');
        liElement.innerHTML=currentCart.coffees[i].coffeeId + " " + currentCart.coffees[i]
        shoppingCart.appendChild(liElement);

    }
};
*/
}

window.addEventListener("load", dosecond, false );