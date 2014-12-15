var ztRoute = angular.module('shopCenter',['ngRoute']);
function routeConfig($routeProvider) {
    var tempPath = './temp/web/';
    $routeProvider.
        when('/user',{
            // controller : homePageController,
            templateUrl : tempPath+'advantage.html'
        }).
        when('/changePass',{
            // controller : createAppController,
            templateUrl : tempPath+'.html'
        }).
        when('/classify',{
            // controller : priceController,
            templateUrl : tempPath+'price.html'
        }).
        when('/addClassify',{
            // controller : introduceController,
            templateUrl : tempPath+'introduce.html'
        }).
        when('/addItem',{
            // controller : customerController,
            templateUrl : tempPath+'customer.html'
        }).
        when('/itemList',{
            // controller : shopCenterController,
            templateUrl : tempPath+'leftMenu.html'
        }).
        when('/addAd',{
            // controller :advantageController, 
            templateUrl : tempPath+'advantage.html'
        }).
        when('/adList',{
            // controller :loginController, 
            templateUrl : tempPath+'login.html'
        }).
        otherwise({
            redirectTo : '/'
        });
}

ztRoute.config(['$routeProvider',routeConfig]);
