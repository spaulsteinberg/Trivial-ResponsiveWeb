//testing case filters
app.controller("caseFilters", function($scope){
    $scope.toLower = "I WAS UPPERCASE";
    $scope.toUpper = "i was lowercase";
});

//testing filter Filter in index
app.controller("searchFilters", function($scope){
    $scope.cities = ['Oakland', 'Austin', 'Seattle', 'Washington', 'New York', 'Chicago', 'Atlanta',
                        'Dallas', 'New Orleans', 'Clearwater', 'Palo Alto'];
});