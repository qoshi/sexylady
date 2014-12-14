ztRoute.controller("shopCenterController",function($scope) {
    var rPath = [
        '',
        '#/changePass',
        '#/classify',
        '#/addClassify',
        '#/addItem',
        '#/ItemList',
        '#/addAd',
        '#/Adlist'
    ];
    var rRoot = './shopCenter.html';
    $scope.active = 0;
    $scope.setActive = function(x) {
        $scope.active = x;
        window.location = rRoot+rPath[x];
    }
});
