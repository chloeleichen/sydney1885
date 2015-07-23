oldSydney.controller("navController", 
    ["$scope", 
    function($scope) {
      $scope.navState = 'nav-close';
      $scope.navToggle = function(){
        $scope.navState = $scope.navState === 'nav-close' ? 'nav-open' : 'nav-close';
      };
    }
]);
