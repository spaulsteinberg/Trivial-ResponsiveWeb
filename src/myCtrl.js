//practice with a first controller, scope allows for html use
app.controller("myCtrl", function($scope) {
    $scope.firstName = "Uel";
    $scope.lastName = "Bergsam";
    var num1 = 5;
    var num2 = 6;
    $scope.product = num1 * num2;
});