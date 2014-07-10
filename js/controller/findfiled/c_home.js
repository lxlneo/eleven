app.controller('CTR_home', function ($scope) {
    $scope.msg = "寻找球场!";
    $scope.filedList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];
    $scope.active = 'map';
    $scope.height = window.screen.height - 70;
    $scope.show=function(d){
        $scope.active = d ;
    }
    // 百度地图API功能
    var map = new BMap.Map("fileMap");            // 创建Map实例
    var point = new BMap.Point(116.404, 39.915);    // 创建点坐标
    map.centerAndZoom(point, 15);                     // 初始化地图,设置中心点坐标和地图级别。
    map.addControl(new BMap.ZoomControl());          //添加地图缩放控件
});