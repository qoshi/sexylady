var ztRoute = angular.module('appCreator',['ngRoute']);
function routeConfig($routeProvider) {
    var tempPath = './temp/web/';
    $routeProvider.
        when('/',{
            // controller : homePageController,
            templateUrl : tempPath+'frontPage.html'
        }).
        when('/createApp',{
            // controller : createAppController,
            templateUrl : tempPath+'createApp.html'
        }).
        when('/price',{
            // controller : priceController,
            templateUrl : tempPath+'price.html'
        }).
        when('/introduce',{
            // controller : introduceController,
            templateUrl : tempPath+'introduce.html'
        }).
        when('/customer',{
            // controller : customerController,
            templateUrl : tempPath+'customer.html'
        }).
        when('/shopCenter',{
            // controller : shopCenterController,
            templateUrl : tempPath+'leftMenu.html'
        }).
        when('/advantage',{
            // controller :advantageController, 
            templateUrl : tempPath+'advantage.html'
        }).
        when('/login',{
            // controller :loginController, 
            templateUrl : tempPath+'login.html'
        }).
        otherwise({
            redirectTo : '/'
        });
}

ztRoute.config(['$routeProvider',routeConfig]);
