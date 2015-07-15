// oldSydney.controller('mainController', function($scope, $firebaseObject){
//   var ref = new Firebase('https://oldsydney.firebaseio.com');
//   var imgs = $firebaseObject(ref);


// });//controller for imgage

oldSydney.controller("mainController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
    var ref = new Firebase('https://oldsydney.firebaseio.com');
    $scope.imgs = $firebaseArray(ref);
    //Code here
    $scope.$on('$viewContentLoaded', function load(){
      echo.init({
        offset: 0,
        throttle: 250,
        unload: false
      });
     });
  }
]);
