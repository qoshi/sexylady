var hot = [];
var cart = [];
var slides = [];
var server = "http://10.210.13.21/PromoPlat/Samples/sample1/action/";
var URL = document.URL;
var argument = URL.substr(URL.indexOf("?")+1).split("&");

var args = {};
for ( i = 0; i < argument.length; i++ ) {
    temp = argument[i].split("=");
    args[temp[0]] = temp[1];
}
var t = args['id'].indexOf("#");
if ( t != -1 ) {
    args['id'] = args['id'].substr(0,t);
}
var callback = "&callback=JSON_CALLBACK";


function userController($scope) {
    $scope.name="刘明123";
}

function shopController($scope) {
    $scope.name='sexyLady的商店';
}

function frontPageController($scope,$http) {
    $scope.hot = hot;
    $scope.myInterval = 3000;
    var url=server+"ads.php?id="+args.id+callback;
    $http.jsonp(url).success(
        function(data) {
            $scope.slides = data;
    });
    url = server+"category.php?id="+args.id+callback;
    $http.jsonp(url).success(
        function(data) {
            $scope.category = data;
        }
    );
    function showItemList( categoryId ) {
        args.categoryId = categoryId;
        var t = URL.indexOf('#');
        if ( t != -1 ) {
            URL = URL.substr(0,t);
        }
        window.location = URL+"#/list";
    }
    $scope.showItemList = showItemList;
}

function cartController($scope) {
    $scope.cart = cart;
    $scope.changeItem = function(index,delta) {
        cart[index].count += delta;
    }
    $scope.getTotal = function() {
        var s = 0;
        var i;
        for ( i in cart ) {
            s += cart[i].count*cart[i].price;
        }
        return s;
    }
}

function listController($scope,$http) {
    if ( !!args.categoryId ) {
        var url = server+"goods.php?id="+args.categoryId+callback;
        $http.jsonp(url).success(function(data){
            $scope.result = data;
        });
    }
    $scope.result = hot;
    function showItem(item) {
        args.item = item;
        var t = URL.indexOf('#');
        if ( t != -1 ) {
            URL = URL.substr(0,t);
        }
        window.location = URL+"#/detail";
    }
    $scope.showItem = showItem;
}

function detailController($scope) {
    var item = args.item;
    if ( args.item ) {
        $scope.item = item;
     }
    item.count = 0;
    function addToCart() {
        var i;
        for ( i in cart ) {
            if ( item.id == cart[i].id ) {
                cart[i].count += item.count;
                alert("添加成功!");
                return;
            }
        }
        cart.push(item);
        alert("添加成功!");
    }
    function changeCount( delta ) {
        item.count += delta;
    }
    $scope.addToCart = addToCart;
    $scope.changeCount = changeCount;
}
