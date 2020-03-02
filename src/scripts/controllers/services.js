app.controller("myLocation", function($scope, $location){
    $scope.myUrl = $location.absUrl();
});