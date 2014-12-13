var shopApp = angular.module('shop',['ngRoute']);
function routeConfig($routeProvider) {
    var tempPath = './temp/';
    $routeProvider.
        when('/',{
            controller : frontPageController,
            templateUrl : tempPath+'frontPage.html'
        }).
        when('/user',{
            // controller : userController,
            templateUrl : tempPath+'user.html'
        }).
        when('/list',{
            // controller : listController,
            templateUrl : tempPath+'list.html'
        }).
        when('/detail',{
            // controller : detailController,
            templateUrl : tempPath+'detail.html'
        }).
        when('/cart',{
            // controller : cartController,
            templateUrl : tempPath+'cart.html'
        }).
        otherwise({
            redirectTo : '/'
        });
}

shopApp.config(['$routeProvider',routeConfig]);
