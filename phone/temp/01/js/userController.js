function userController($scope) {
    $scope.name="sbqoshi";
}

var hot = [
    {
        name : "sb1",
        description : "lalalalalalalalallala"
    },
    {
        name : "sb2",
        description : "lalalalalalalalallala"
    },
    {
        name : "sbe",
        description : "ahaha"
    },
];

var cart = [
    {
        name : "sb1",
        count : 10,
        unitPrice : 100,
        description : "lalalalalalalalallala"
    },
    {
        name : "sb2",
        count : 1,
        unitPrice : 200,
        description : "lalalalalalalalallala"
    },
    {
        name : "sbe",
        count : 5,
        unitPrice : 300,
        description : "ahaha"
    },
];


function frontPageController($scope) {
    $scope.hot = hot;
}

function cartController($scope) {
    $scope.cart = cart;
    $scope.getTotal = function() {
        var s = 0;
        var i;
        for ( i in cart ) {
            s += cart[i].count*cart[i].unitPrice;
        }
        return s;
    }
}
