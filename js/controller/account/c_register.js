'use strict';
app.controller('CTR_register', function ($scope, userDAO, Utils) {
        var vm = $scope.vm = {action:{},data:{}};
    vm.action.register = function() {
        var user = {};
        user.username = vm.email;
        user.email = vm.email;
        user.password = vm.password;
        userDAO.register(user).then(function (data) {
            if (data.id) {
                //注册成功
                Utils.goHome();
            }
        }, function (error) {
            console.log(error.message);
        });
    }
});