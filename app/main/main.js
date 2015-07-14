oldSydney.controller('mainController', function($scope){
    $scope.$on('$viewContentLoaded', function log(){
        console.log($scope.searchForm);
    });
});
