app.controller("nestedFuncControllers", function($scope){
    $scope.firstName = "Samuel";
    $scope.lastName = "Steinberg";
    $scope.fullName = function(){
        return ($scope.firstName + " " + $scope.lastName);
    };
});