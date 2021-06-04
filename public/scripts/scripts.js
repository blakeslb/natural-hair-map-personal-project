console.log("hellow world")


//try axios
//call geocode
// geocode();

// function geocode(){
//   const location = '22 Main St Boston MA'
//   axios.get("https://maps.googleapis.com/maps/api/geocode/outputjson", {
//     params: {
//       address: location,
//       key: 'AIzaSyDKEZCz730qwqKPlvJkYEMWkXfqPPR2zeA'
//     }
//   })
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error){
//     console.log(error);
//   })

// }






// /* // Initialize and add the map */



let map;



function initMap() {

  const boston = { lat: 42.3601, lng: -71.0589 };
    const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: boston,
  });

  new google.maps.Marker({
    position: boston,
    map,
    title: "Hello World!",
  });

const address = document.querySelector("#address");

const geocoder = new google.maps.Geocoder();
  document.getElementById("submit").addEventListener("click", () => {
    geocodeAddress(geocoder, map);
  });

  //grabs address from text inpute field, and then geocodes/grads coords?
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
        //creates a marker that gets the location of the resultsobject and places it in the map)
      //   let marker = new google.maps.Marker({
      //     map: resultsMap,
      //     position: results[0].geometry.location,
      // });

        document.getElementById("address").value = results[0].geometry.location
      
      } else {
        document.querySelector('#message p').innerText = "Geocode was not successful for the following reason: " + status;
      }
    });
  }





}
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

    

  
    // function codeAddress() {
    //   const address = document.getElementById('address').value;
    //   geocoder.geocode( { 'address': address}, function(results, status) {
    //     if (status == 'OK') {
    //       map.setCenter(results[0].geometry.location);
    //       let marker = new google.maps.Marker({
    //           map: map,
    //           position: results[0].geometry.location
    //       });
    //     } else {
    //       console.log('Geocode was not successful for the following reason: ' + status);
    //     }
    //   });
    // }

    