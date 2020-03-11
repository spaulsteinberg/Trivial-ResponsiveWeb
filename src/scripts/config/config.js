//route provider uses the config method for determining routes
app.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl: "index.html"
    })
    .when("/route_test1", {
        templateUrl: "route_test1.html",
        controller: routeOneControl
    })
    .when("/route_test2", {
        templateUrl: "route_test2.html",
        controller: routeTwoControl
    });
});

app.controller("routeOneControl", function($scope){
    $scope.messageToSend = "Hello from Route 1!!";
});
app.controller("routeTwoControl", function($scope){
    $scope.messageToSend = "Hello from Route 1!!";
}]);