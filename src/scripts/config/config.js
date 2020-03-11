//route provider uses the config method for determining routes
app.config(function($routeProvider){
    $routeProvider
    .when("/route_test2", {
        templateUrl: "route_test2.html",
        controller: 'routeTwoControl'
    })
    .when("/pagefortest", {
        templateUrl: "pagefortest.html"
    })
    .otherwise({
        redirectTo: "/"
    })
});

//this controller will display the message in the scope of the routed doc
app.controller("routeTwoControl", function($scope){
    $scope.messageToSend = "Hello from Route 2!!";
});

//this controller changes the visibility of the routed pages...
//showMe will mainly be used to close out on dbl click, alwaysShow will always show on single
app.controller("closeOut", function($scope){
    $scope.show = true;
    $scope.showMe = function(){
        $scope.show = !$scope.show;
    }
    $scope.alwaysShow = function(){
        $scope.show = true;
    }
})