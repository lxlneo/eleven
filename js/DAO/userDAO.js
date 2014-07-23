/**
 * Created by lee on 2014.07.11 011.
 */
'use strict'
app.factory('userDAO',function(Utils){
    var p = _getPromise();
    var promise = {
        success: function (data) {
            Utils.hideLoading();
            p.resolve(data);
        }, error: function (data, _error) {
            Utils.hideLoading();
            p.reject(data);
        }
    };
    function _getPromise(){
        return new AV.Promise();
    }
    //注册用户
    function regiseter(_user){
        var user = new AV.User();
        user.set("username", _user.username);
        user.set("password", _user.password);
        user.set("nickname",_user.nickname);
        user.set("email", _user.email);
        user.set("phone", _user.phone);
        Utils.showLoading();
        user.signUp(null, promise);
        return p;
    }
    //login
    function login(_user){
        Utils.showLoading();
        AV.User.logIn(_user.username,_user.password,promise)
        return p;
    }

    // 保存用户信息
    function saveUser(_user){

    }
    // 获得当前用户
    function logout(){
        AV.User.logOut();
        return _getPromise();
    }

    // 得到当前登录用户
    function _getCurrentUser(){
        var currentUser = AV.User.current();
        var _p = _getPromise();
        if(currentUser){
            _p.resolve(currentUser);
        }else{
            _p.reject();
        }
        return _p;
    }
    //查询用户
    function _queryUser(_query){

    }
    //找回密码
    function _revesePwd(_data){
        Utils.showLoading();
        AV.User.requestPasswordReset(_data, promise);
        return p;
    }

    return {
        register:function(_u){
            return regiseter(_u);
        },

        save:function(_u){
            return saveUser(_u);
        },
        queryUser:function(_q){
            return _queryUser(_q);
        },
        logout:function(){
            return logout();
        },
        login:function(_user){
            return login(_user);
        },
        checkinLogin:function(){
            return _getCurrentUser();
        },
        revesePwd:function(_data){
            return _revesePwd(_data);
        }
    }
});