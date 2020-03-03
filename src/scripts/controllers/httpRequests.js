
//controller to make http request. 
app.controller("funcGet", function($scope, $http){
        $http({
          method : "GET", //specify method
          url : "welcome.htm" //specify URL
        }).then(function onSuccess(response) {//functions after then will be for response, then error.\
            $scope.response = response.status + " " + response.statusText;
          }, function onError(response) {
            $scope.response = response.status + " " + response.statusText;
        });
});

//controller to retrieve names from php form
app.controller("namesFromServer", function($scope, $http){
    $http.get("https://www.w3schools.com/angular/customers.php").then(function(response){
        $scope.myData = response.data.records; //records is an object containing a list of objects with a 'Name' and 'Country'
    });

    $scope.sortBy = function(method){
        $scope.sortMethod = method;
    };
});