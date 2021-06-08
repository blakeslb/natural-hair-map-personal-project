// let map;

// function initMap() {

//   const boston = { lat: 42.3601, lng: -71.0589 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: boston,
//   });

//   new google.maps.Marker({
//     position: boston,
//     map,
//     title: "Hello World!",
//   });




// //do i need this?
// const address = document.querySelector("#address");

// const geocoder = new google.maps.Geocoder();
//   document.getElementById("address").addEventListener("blur", () => {
//     geocodeAddress(geocoder, map);
//   });

//   //grabs address from text inpute field, and then geocodes/grads coords?
//   function geocodeAddress(geocoder, resultsMap) {
//     const address = document.getElementById("address").value;
    
//     geocoder.geocode({ address: address }, (results, status) => {
//       if (status === "OK") {
//         //creates a marker that gets the location of the resultsobject and places it in the map)
//       //   let marker = new google.maps.Marker({
//       //     map: resultsMap,
//       //     position: results[0].geometry.location,
//       // });
//       document.querySelector('#errMessage p').innerText = `Geocode successful!`;


//         document.getElementById("coords").value = results[0].geometry.location;
//         // document.getElementById("lat").value = results[0].geometry.location.lat;
//         // document.getElementById("lang").value = results[0].geometry.location.lng;


      
//       } else {
//         document.querySelector('#errMessage p').innerText = `Geocode was not successful for the following reason: ${status}. Enter address with format: 10 Main St Boston MA`;
//         document.getElementById("coords").value = null; 


//       }
//     });
//   }

// }

// for (let i = 0; i < markers.length; i++) {
//   addMarker(markers[i])
// }
// Add Marker Function
// function addMarker(props) {
//   const marker = new google.maps.Marker({
//     position: props.coords,
//     map: map,
//     content: props.content
//   });



  // marker.setMap(map);

//   //Array of markers
//this is where to use database/objects with controllers?
//   const markers = [
//     {
//       coords: position,
//       content: '<h1>Boston, MA</h1>'
//     },
//     {
//       coords: { lat: 42.288387421566924, lng: -71.06370145126924 },
//       content: '<h1>Styllistik</h1>'
//     },
//   ]
// //   //Loop though markers
//   for (let i = 0; i < markers.length; i++) {
//     addMarker(markers[i])
//   }
// // //   // Add Marker Function
//   function addMarker(props) {
//     const marker = new google.maps.Marker({
//       // position: props.coords,
//       position: 
//       map: map,
//       content: props.content
//     });
  

// //     //check for customicon
//     if (props.iconImage) {
//     //   set icon image;
//       marker.setIcon(props.iconImage);
//     }
// //     //check content
//     if (props.content) {
//       const infoWindow = new google.maps.InfoWindow({
//         content: props.content
//       });

//       marker.addListener('click', function () {
//         infoWindow.open(map, marker);
//       });
//     }
//   }

    

  
  