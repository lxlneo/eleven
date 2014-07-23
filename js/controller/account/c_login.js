'use strict';
app.controller('CTR_login', function ($scope,userDAO,Utils,$rootScope) {
        var vm = $scope.vm = {action:{},login:{},error:{}};
        vm.action.login = function(){
                 var ajaxData =  {username:vm.login.username,password:vm.login.password};
                 userDAO.login(ajaxData).then(function(data){
                        $rootScope.$broadcast('menu:update');
                        Utils.goHome();
                     },
                     function(error){
                        vm.error.status = true;
                        vm.error.info = error.message;
                         $scope.$apply();
                 });
        }
        vm.action.findpwd = function(){
            var ajaxData =  vm.login.username;
            userDAO.revesePwd(ajaxData).then(function(data){
                console.log(data);
            },function(error){
                console.log(error);
            });
        }
});