'use strict'
var app = angular.module('eleven', ['ionic']);
app.constant("DBC", {
    "appID": '8sgotlduzf4peeoagrcdgagl9g47ugxw1xl0jhc13d2z3xec',
    "appKey": '2whvzsuuqrd69zg7s0dy41n2x9fjf5ppizh0sgl3156xgzn7'
});
app.config(function ($stateProvider, $urlRouterProvider) {
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
                'menuContent': {
                    templateUrl: "templates/home.html",
                    controller: 'CTR_home'
                }
            }
        })
        .state('eleven.login', {
            url: "/login",
            views: {
                'menuContent': {
                    templateUrl: "templates/account/login.html",
                    controller: 'CTR_login'
                }
            }
        })
        .state('eleven.register', {
            url: "/register",
            views: {
                'menuContent': {
                    templateUrl: "templates/account/register.html",
                    controller: 'CTR_register'
                }
            }
        });
    $urlRouterProvider.otherwise("/eleven/home");
}).run(function ($rootScope,$location) {
    if (!!!$rootScope.initAVOS) {
        // 初始化 param1：应用 id、param2：应用 key
        AV.initialize("8sgotlduzf4peeoagrcdgagl9g47ugxw1xl0jhc13d2z3xec", "2whvzsuuqrd69zg7s0dy41n2x9fjf5ppizh0sgl3156xgzn7");
        $rootScope.initAVOS = true;
    }
}).controller('MenuCtrl', function ($rootScope,$scope, $ionicSideMenuDelegate,Utils,userDAO) {
    if(AV.User.current()){
        $rootScope.user = AV.User.current();
        $rootScope.hasLogin = true;
    }
    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
    $scope.toggleRight = function () {
        $ionicSideMenuDelegate.toggleRight();
    };
    $scope.logout = function(){
        userDAO.logout().then(function(){
            $scope.$apply();
            Utils.goHome();
        });
    }
    $scope.$on('menu:update',function(){
        $rootScope.hasLogin = true;
        $scope.$apply();
    });
});
