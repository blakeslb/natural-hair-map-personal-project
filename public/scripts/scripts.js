console.log("hellow world")


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

//do i need this?
const address = document.querySelector("#address");

const geocoder = new google.maps.Geocoder();
  document.getElementById("address").addEventListener("blur", () => {
    geocodeAddress(geocoder, map);
  });

  //grabs address from text inpute field, and then geocodes/grads coords?
  function geocodeAddress(geocoder, resultsMap) {
    const address = document.getElementById("address").value;
    
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === "OK") {
   
      document.querySelector('#errMessage p').innerText = `Geocode successful!`;


        document.getElementById("coords").value = results[0].geometry.location;
     
      
      } else {
        document.querySelector('#errMessage p').innerText = `Geocode was not successful for the following reason: ${status}. Enter address with format: 10 Main St Boston MA`;
        document.getElementById("coords").value = null; 


      }
    });
  }

}

    

  
  