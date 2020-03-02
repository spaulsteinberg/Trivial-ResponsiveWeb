//testing location service
app.controller("myLocation", function($scope, $location){
    $scope.myUrl = $location.absUrl();
});

//function performs HTTP GET request and will return an err otherwise
app.controller("w3Http", function($scope, $http){
    $http.get("http://echo.jsontest.com/title/ipsum/content/blah").then(function(response){
        $scope.w3HttpResponse = response.data['title'];
    }).catch(function(e){
        $scope.w3HttpResponse = "Not found";
    });
});

//function to test timeout service
app.controller("timeoutResponse", function($scope, $timeout){
    $scope.headline= "Good Morning USA";
    var alternate = "God Bless the USA";
    $timeout(function(){
        $scope.headline = alternate;
    }, 4000); //timeout in ms, so 4 seconds
});

//function to test interval service
app.controller("timeInterval", function($scope, $interval){
    $scope.curTime = new Date().toLocaleTimeString();
    $scope.message = "Original Message";
    var alt = "Alternating Message";
    $interval(function(){
        $scope.curTime = new Date().toLocaleTimeString();
    }, 1000) //update each 1000ms = 1s

    $interval(function(){
        if ($scope.message != "Original Message"){
            $scope.message = "Original Message";
        }else $scope.message = alt;
    }, 3500);
})