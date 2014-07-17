'use strict';

app.factory('Utils',function($rootScope,$location){

    function _goto(_url){
        $location.path(_url);
    }
    function _goLogin(){
        _goto('#/eleven/login');
    }
    function _goHome(){
        _goto('#/eleven/home');
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
        }
    }
});
