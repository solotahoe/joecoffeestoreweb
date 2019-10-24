function CreateDrivingDirectionsMap(){
if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onSuccess, onError,{
        enableHighAccuracy:true,
        maximumAge:1000,
        timeout:500
    });
}else{
    document.getElementById(map).innerHTML="No support for geolocation, we can't find you";
     }

};
function onSuccess(position){
showMap(
 position.coords.latitude,
 position.coords.longitude
     );
};

function onError(){
var mapDiv=document.getElementById("map");
switch(error.code){
        case error.PERMISSION_DENIED:
            mapDiv.innerHTML="user denied the request for geolocation."
            break;

        case error.POSITION_UNAVAILABLE:
            mapDiv.innerHTML="location information is unavailable."
            break;
        case error.TIMEOUT:
            mapDiv.innerHTML="The request to get the user location timed out."
            break;
        case error.UNKNOWN_ERROR:
            mapDiv.innerHTML="An unkown error occured."
            break;
               }

};


function showMap(lat, long){
var directionsService=new google.maps.DirectionsService();
var directionsRenderer=new google.maps.DirectionsRenderer();

var route= {
    origin: new google.maps.latLng(lat, long),
    destination: "Grote Markt, Brussel",
    travelMode: google.maps.DirectionsTravelMode.DRIVING
};
 var mapOptions ={
     zoom:10,
     center:new google.maps.latLng(-1.292066, 36.821945),
     mapTypeId: google.maps.MapTypeid.ROADMAP
              };

      var map= new google.maps.Map(document.getElementById("map"),mapOptions);
    directionsRenderer.setMap(map);
     directionsService.route(route, function (result, status){
 if (status===google.maps.DirectionsStatus.Ok){
         directionsRenderer.setDirections(result);
                  }
              });

}
window.addEventListener("load",CreateDrivingDirectionsMap,false );
