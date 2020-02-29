//function for clicking, changes between 0 and 1
app.controller("changeBack", function($scope){
    $scope.number = 1;
    $scope.changeNum = function(){
        $scope.number = $scope.number ? 0 : 1;
    }
});