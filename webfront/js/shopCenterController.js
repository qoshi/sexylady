ztRoute.controller("shopCenterController",function($scope) {
    var rPath = [
        '#/',
        '#/changePass',
        '#/classify',
        '#/addClassify',
        '#/addItem',
        '#/itemList',
        '#/addAd',
        '#/adlist'
    ];
    var rRoot = './shopCenter.html';
    $scope.active = -1;
    $scope.setActive = function(x) {
        $scope.active = x;
        window.location = rRoot+rPath[x];
    }
});
