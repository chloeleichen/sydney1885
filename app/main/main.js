  oldSydney.controller("mainController", 
    ["$scope",
    "$filter",
    "$firebaseArray", 
    function($scope, $filter, $firebaseArray) {
      var ref = new Firebase('https://oldsydney.firebaseio.com');
      $scope.imgs = $firebaseArray(ref);
      $scope.lClass = 'close';
      //lazy load images
      // $scope.$on('$viewContentLoaded', function load(){
      //   echo.init({
      //     offset: 0,
      //     throttle: 250,
      //     unload: false
      //   });
      //  });

    var map, infoWindow;
    $scope.$on('mapInitialized', function(evt, evtMap) {
      map = evtMap;
    });

    var infoWindow = new google.maps.InfoWindow();
    $scope.markers = [
      {
        title: "George Street",
        position: [-33.870593, 151.206939]
      },
      {
        title: "Fitzroy Dock",
        position: [-33.848574, 151.172859]
      },
      {
        title: "Hyde Park",
        position: [-33.873138, 151.211276]
      },
      {
        title: 'Oxford Street',
        position: [-33.887304, 151.230648]
      }
    ];

    $scope.markerClick = function(event) {
      $scope.selectedMarker = this.title;
      infoWindow.setContent(this.title);
      infoWindow.open($scope.map, this);
    }

    var toggleClass = function(){
      if($scope.lClass == 'open'){
        $scope.lClass = 'close';
      }else{
        $scope.lClass = 'open';
      }
    }

    $scope.photoClick = function(event){
      $scope.lightbox = {
        img: this.img.highreslink,
        caption: this.img.caption
      }
      toggleClass(); 
      var delay = setTimeout(function(){
        echo.init();
      }, 0);  
    }

    $scope.toggleClick = function(){
      toggleClass();
      $scope.lightbox = {};
    }
  }
]);
