'use strict';

app.factory('Utils',function($rootScope,$location,$ionicLoading){

    function _goto(_url){
        $location.url(_url);
    }
    function _goLogin(){
        _goto('/eleven/login');
    }
    function _goHome(){
        _goto('/eleven/home');
    }
    function _showLoading(){
        $ionicLoading.show({
            templateUrl : 'templates/part/loading.html'
        });
    }
    function _hideLoading(){
        $ionicLoading.hide();
    }
    return{
        goto:function(url){
           return _goto(url);
        },
        goLogin:function(){
            return _goLogin();
        },
        goHome:function(){
            return _goHome();
        },
        showLoading:function(){
            return _showLoading();
        },
        hideLoading:function(){
            return _hideLoading();
        }
    }
});
