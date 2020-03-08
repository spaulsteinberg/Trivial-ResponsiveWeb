app.controller("formsTest", function($scope){
    $scope.show = true;
    $scope.master = {
        firstName: "",
        lastName: "",
        email: ""
    };
    $scope.submit = function(){
        $scope.show = false;
        alert("Submitted successfully");
    }
    $scope.reset = function(){
        $scope.user = angular.copy($scope.master);
    }
    $scope.reset();

});