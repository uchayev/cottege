// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 9,
        scrollwheel: false,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55, 37.9), // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: 

        [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);


   var waypts = [];
      directionsService = new google.maps.DirectionsService();
      directionsDisplay = new google.maps.DirectionsRenderer({
      });
      
          var request = {
              origin: new google.maps.LatLng(55.755826, 37.6173),
              destination: new google.maps.LatLng(55.9814542, 36.79829100000006),
              waypoints: waypts,
              travelMode: google.maps.DirectionsTravelMode.DRIVING
          };

          directionsService.route(request, function(response, status) {
              if (status == google.maps.DirectionsStatus.OK) {
                  polylineOptions = {
                      strokeColor: '#5a9fff',
                      strokeWeight: '3'
                  }
                  directionsDisplay.setOptions({
                      polylineOptions: polylineOptions
                  });
                  directionsDisplay.setDirections(response);
              }
          });
          directionsDisplay.setMap(map);


    // Let's also add a marker while we're at it
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(56.04573,36.734034),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


     //var contentString = 'КП "Куртниково"';

//  var infowindow = new google.maps.InfoWindow({
//  content: contentString
 // });

//  marker.addListener('mouseover', function() {
 //   infowindow.open(map, marker);
//  });

  var marker2 = new google.maps.Marker({
        position: new google.maps.LatLng(56.083255,36.714972),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString2 = 'КП "Лисички"';

//  var infowindow2 = new google.maps.InfoWindow({
//    content: contentString2
//  });

//  marker2.addListener('mouseover', function() {
//    infowindow2.open(map, marker2);
//  });

var marker3 = new google.maps.Marker({
        position: new google.maps.LatLng(56.059385,36.738419),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//    var contentString3 = 'КП "ЛЕТО"';

 // var infowindow3 = new google.maps.InfoWindow({
   // content: contentString3
 // });

 // marker3.addListener('mouseover', function() {
 //   infowindow3.open(map, marker3);
 // });

var marker4 = new google.maps.Marker({
        position: new google.maps.LatLng(56.046137,36.677449),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString4 = 'КП "Леоново"';

 // var infowindow4 = new google.maps.InfoWindow({
//    content: contentString4
//  });

  marker4.addListener('mouseover', function() {
    infowindow4.open(map, marker4);
  });

var marker5 = new google.maps.Marker({
        position: new google.maps.LatLng(56.08953,36.739442),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString5 = 'КП "Озерный край-2"';

//  var infowindow5 = new google.maps.InfoWindow({
//    content: contentString5
//  });

//  marker5.addListener('mouseover', function() {
//    infowindow5.open(map, marker5);
//  });

var marker6 = new google.maps.Marker({
        position: new google.maps.LatLng(56.005294,36.727604),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString6 = 'КП "Zorino Sport Village"';

 // var infowindow6 = new google.maps.InfoWindow({
 //   content: contentString6
//  });

//  marker6.addListener('mouseover', function() {
//    infowindow6.open(map, marker6);
//  });

var marker7 = new google.maps.Marker({
        position: new google.maps.LatLng(56.004605,36.714936),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString7 = 'КП "Zorino Active Resort"';
//  var infowindow7 = new google.maps.InfoWindow({
//    content: contentString7
//  });

//  marker7.addListener('mouseover', function() {
//    infowindow7.open(map, marker7);
//  });

var marker8 = new google.maps.Marker({
        position: new google.maps.LatLng(56.051129,36.700132),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString8 = 'КП "Экопарк "Ушаково"';

//  var infowindow8 = new google.maps.InfoWindow({
//    content: contentString8
//  });

//  marker8.addListener('mouseover', function() {
//    infowindow8.open(map, marker8);
//  });

var marker9 = new google.maps.Marker({
        position: new google.maps.LatLng(56.055932,36.686270),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString9 = 'КП "Ушаковские дачи"';

//  var infowindow9 = new google.maps.InfoWindow({
//    content: contentString9
//  });

//  marker9.addListener('mouseover', function() {
//    infowindow9.open(map, marker9);
//  });

var marker10 = new google.maps.Marker({
        position: new google.maps.LatLng(56.057534,36.682365),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString10 = 'КП "Ушаковские дачи-2"';

//  var infowindow10 = new google.maps.InfoWindow({
//    content: contentString10
//  });

//  marker10.addListener('mouseover', function() {
//    infowindow10.open(map, marker10);
//  });


var marker11 = new google.maps.Marker({
        position: new google.maps.LatLng(56.084433,36.755852),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString11 = 'КП "Берег Honka" ';

//  var infowindow11 = new google.maps.InfoWindow({
//    content: contentString11
//  });

//  marker11.addListener('mouseover', function() {
//    infowindow11.open(map, marker11);
//  });


var marker12 = new google.maps.Marker({
        position: new google.maps.LatLng(56.089880,36.739276),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString12 = 'КП "Озерныйкрай. Лыщево"';

//  var infowindow12 = new google.maps.InfoWindow({
//    content: contentString12
//  });

//  marker12.addListener('mouseover', function() {
//    infowindow12.open(map, marker12);
//  });


var marker13 = new google.maps.Marker({
        position: new google.maps.LatLng(56.051789,36.738482),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString13 = 'КП "Тихая Заводь"';

//  var infowindow13 = new google.maps.InfoWindow({
//    content: contentString13
//  });

//  marker13.addListener('mouseover', function() {
//    infowindow13.open(map, marker13);
//  });


var marker14 = new google.maps.Marker({
        position: new google.maps.LatLng(56.089260,36.710995),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString14 = 'КП "Никитское"';

//  var infowindow14 = new google.maps.InfoWindow({
//    content: contentString14
//  });

//  marker14.addListener('mouseover', function() {
//    infowindow14.open(map, marker14);
//  });


var marker15 = new google.maps.Marker({
        position: new google.maps.LatLng(56.090040,36.743260),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString15 = 'КП "Like-Side"';

//  var infowindow15 = new google.maps.InfoWindow({
//    content: contentString15
//  });

//  marker15.addListener('mouseover', function() {
//    infowindow15.open(map, marker15);
//  });


var marker16 = new google.maps.Marker({
        position: new google.maps.LatLng(55.982460,36.772408),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString16 = 'КП "Шелестово"';

//  var infowindow16 = new google.maps.InfoWindow({
//    content: contentString16
//  });

//  marker16.addListener('mouseover', function() {
//    infowindow16.open(map, marker16);
//  });


var marker17 = new google.maps.Marker({
        position: new google.maps.LatLng(55.989493,36.832560),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString17 = 'КП "Дачи Honka" ';

//  var infowindow17 = new google.maps.InfoWindow({
//    content: contentString9
//  });

//  marker17.addListener('mouseover', function() {
//    infowindow17.open(map, marker17);
//  });


var marker18 = new google.maps.Marker({
        position: new google.maps.LatLng(55.971158,36.827711),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString18 = 'КП "Лесная Пристань"';

//  var infowindow18 = new google.maps.InfoWindow({
//    content: contentString18
//  });

//  marker18.addListener('mouseover', function() {
//    infowindow18.open(map, marker18);
//  });


var marker19 = new google.maps.Marker({
        position: new google.maps.LatLng(55.973806,36.821531),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString19 = 'КП " Лесная Пристань-2"';

//  var infowindow19 = new google.maps.InfoWindow({
//    content: contentString19
//  });

//  marker19.addListener('mouseover', function() {
//    infowindow19.open(map, marker19);
//  });


var marker20 = new google.maps.Marker({
        position: new google.maps.LatLng(56.055932,36.686270),
        map: map,
        icon:{url:'img/point.png',origin: new google.maps.Point(0, 0),
  origin: new google.maps.Point(-5, 0),size: new google.maps.Size(35, 33),},
        title: ''
    });


//     var contentString20 = 'КП "РЕКА-РЕКА"';

//  var infowindow20 = new google.maps.InfoWindow({
//    content: contentString20
//  });

//   marker20.addListener('mouseover', function() {
//    infowindow20f.open(map, marker20);
}
