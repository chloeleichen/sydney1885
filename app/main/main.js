oldSydney.controller("mainController", 
    ["$scope",
     "$filter",
     "$firebaseArray", 
  function($scope, $filter, $firebaseArray) {
    var ref = new Firebase('https://oldsydney.firebaseio.com');
    $scope.imgs = $firebaseArray(ref);
    //lazy load images
    // $scope.$on('$viewContentLoaded', function load(){
    //   echo.init({
    //     offset: 0,
    //     throttle: 250,
    //     unload: false
    //   });
    //  });

    var locations = [
    {
        street : 'George Street',
        desc : 'This is the best city in the world!',
        lat : -33.870593,
        long : 151.206939
    },
    {
        street : 'Fitzroy Dock',
        desc : 'This city is aiiiiite!',
        lat : -33.848574, 
        long : 151.172859
    },
    {
        street : 'Hyde Park',
        desc : 'This is the second best city in the world!',
        lat : -33.873138,
        long : 151.211276
    }
];

    var mapOptions = {
        zoom: 15,
        center: {lat: -33.867487, lng: 151.206990}
    }

    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    $scope.markers = [];
    var infoWindow = new google.maps.InfoWindow();
    var createMarker = function (info){    
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.street
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        google.maps.event.addListener(marker, 'click', function(){
            infoWindow.setContent('<h4>' + marker.title + '</h4>' + marker.content);
            infoWindow.open($scope.map, marker);
        });
        $scope.markers.push(marker);
    }
     for (i = 0; i < locations.length; i++){
        createMarker(locations[i]);
        }
    $scope.markers.forEach(function(marker){
        google.maps.event.addListener(marker, 'click', function() {
            $scope.selectedMarker = marker.title;
            console.log($scope.selectedMarker);
          });
        });
    }
]);
