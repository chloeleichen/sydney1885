  oldSydney.controller("mainController",
    ["$scope",
    "$filter",
    "$firebaseArray",
    function($scope, $filter, $firebaseArray) {
      var ref = new Firebase('https://oldsydney.firebaseio.com');
      var map, infoWindow, lightboxImg;
      lightboxImg = document.getElementById('lightbox-img');
      infoWindow = new google.maps.InfoWindow();
      $scope.imgs = $firebaseArray(ref);
      $scope.lClass = 'close';
      $scope.loadState = 'loading';

    $scope.imgs.$loaded(function(event){
      $scope.loadState = 'loaded';
    });

    $scope.$on('mapInitialized', function(evt, evtMap) {
      map = evtMap;
    });

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
      },
      {
        title: 'Pitt Street',
        position: [-33.881372, 151.206239]
      },
      {
        title: 'Circular Quay',
        position: [-33.861858, 151.210546]
      },
      {
        title: 'Newtown',
        position: [-33.898715, 151.180981]
      },
      {
        title: 'North Head',
        position: [-33.820894, 151.298984]
      },
      {
        title: 'Manly',
        position: [-33.798521, 151.28612]
      },
      {
        title: 'Darling Harbour',
        position: [-33.871114, 151.199042]
      },
      {
        title: 'Coogee Bay',
        position: [-33.925156, 151.252112]
      },
      {
        title: 'Barrack Street',
        position: [-33.867676, 151.205906]
      },
      {
        title: 'Mosman',
        position: [-33.841778, 151.231373]
      },
      {
        title: 'North Sydney',
        position: [-33.838634, 151.207114]
      },
      {
        title: 'HayMarket',
        position: [-33.879193, 151.20339]
      },
      {
        title: 'Balmain',
        position: [-33.857550, 151.181043]
      },
      {
        title: 'Hillside',
        position: [-33.601551, 151.007816]
      },
      {
        title: 'Cleveland',
        position: [-33.889948, 151.207894]
      },
      {
        title: 'Pyrmont',
        position: [-33.869546, 151.19454]
      },
      {
        title: 'Macquarie Street',
        position: [-33.863082, 151.212915]
      },
      {
        title: 'Redfern',
        position: [-33.892507, 151.201718]
      },
      {
        title: 'Glebe',
        position: [-33.881128, 151.188318]
      },
      {
        title: 'Rookwood',
        position: [-33.877729, 151.060903]
      },
      {
        title: 'Darlinghurst',
        position: [-33.880680, 151.21862]
      },
      {
        title: 'Paddington',
        position: [-33.884611, 151.226586]
      },
      {
        title: 'Sydney University',
        position: [-33.888584, 151.187347]
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
      lightboxImg.src = 'assets/img/empty.svg';
    }

    $scope.reset = function(){
      $scope.selectedMarker = '';
    }
  }
]);
