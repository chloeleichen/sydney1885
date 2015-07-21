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

var marker, map;
  $scope.$on('mapInitialized', function(evt, evtMap) {
    map = evtMap;
    marker = map.markers[0];
  });

  $scope.click = function(event) {
    $scope.selectedMarker = this.title;
    console.log(this);
  }
}
]);
