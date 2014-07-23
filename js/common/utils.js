'use strict';

app.factory('Utils',function($rootScope,$location,$ionicLoading,$ionicModal){

    function _goto(_url){
        $location.url(_url);
    }
    function _goLogin(){
        _goto('/eleven/login');
    }
    function _goHome(){
        _goto('/eleven/home');
    }
    function _goRegister(){
        _goto('/eleven/register');
    }
    function _showLoading(){
        $ionicLoading.show({
            templateUrl : 'templates/part/loading.html'
        });
    }
    function _hideLoading(){
        $ionicLoading.hide();
    }

    /**
     * $ionicModal
     */
    function _showModal(){
        $ionicModal.show();
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
        goRegister:function(){
            return _goRegister();
        },
        showLoading:function(){
            return _showLoading();
        },
        hideLoading:function(){
            return _hideLoading();
        },
        showModal:function(){
            return _showModal();
        }
    }
});
