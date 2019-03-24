let mymap = L.map('mapid').setView([33.366073, -111.722340], 15);
let marker = L.marker([33.366073, -111.722340]).addTo(mymap);
let key = "pk.eyJ1Ijoic2NvdHR5ZHV3b3AiLCJhIjoiY2p0bjZzbjJmNDQ2MDQ5bnV4bmptdzk2bSJ9.An44xrfbLsNKRSK_XQ-KSQ";

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken:`${key}`
}).addTo(mymap);

marker.bindPopup("Sushi Ave").openPopup();

/*nav bar*/
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


