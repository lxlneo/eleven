var app = angular.module('eleven', ['ionic']);
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('eleven', {
            url: "/eleven",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'MenuCtrl'
        })
        .state('eleven.home', {
            url: "/home",
            views: {
                'menuContent' :{
                    templateUrl: "templates/home.html",
                    controller:'CTR_home'
                }
            }
        });
    $urlRouterProvider.otherwise("/eleven/home");
})
    .controller('MenuCtrl', function($scope, $ionicSideMenuDelegate) {

        $scope.toggleLeft = function() {
            $ionicSideMenuDelegate.toggleLeft();
        };
        $scope.toggleRight = function() {
            $ionicSideMenuDelegate.toggleRight();
        };

    });
