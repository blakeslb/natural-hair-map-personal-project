console.log("hellow world")




// /* // Initialize and add the map */

let map;
function initMap() {
  // The location of Boston
  const boston = { lat: 42.3601, lng: -71.0589 };
  // The map, centered at Boston
    map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: boston,
  });

//   //Array of markers
//this is where to use database/objects with controllers?
  const markers = [
    {
      coords: { lat: 42.3601, lng: -71.0589 },
      content: '<h1>Boston, MA</h1>'
    },
    {
      coords: { lat: 42.288387421566924, lng: -71.06370145126924 },
      content: '<h1>Styllistik</h1>'
    },
  ]
//   //Loop though markers
  for (let i = 0; i < markers.length; i++) {
    addMarker(markers[i])
  }
//   // Add Marker Function
  function addMarker(props) {
    const marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      content: props.content
    });

//     //check for customicon
    if (props.iconImage) {
    //   set icon image;
      marker.setIcon(props.iconImage);
    }
//     //check content
    if (props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    }
  }

    }