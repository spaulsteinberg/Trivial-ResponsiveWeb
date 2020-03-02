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
//build capital/country object array
app.controller("sortTable", function($scope){
    $scope.countryInfo = [ 
        {capital: "Washington, D.C.", country: "United States", continent: "North America", population: 633427},
        {capital: "London", country: "United Kingdom", continent: "Europe", population: 9126366},
        {capital: "Paris", country: "France", continent: "Europe", population: 2249977},
        {capital: "Mexico City", country: "Mexico", continent: "North America", population: 8855000},
        {capital: "Ottawa", country: "Canada", continent: "North America", population: 994837},
        {capital: "Stockholm", country: "Sweden", continent: "Europe", population: 974073},
        {capital: "Oslo", country: "Norway", continent: "Europe", population: 673469},
        {capital: "Berlin", country: "Germany", continent: "Europe", population: 3460725}];
    //user on click will send the order by to this method to set
    $scope.orderByThis = function(userSortBy){
        $scope.userOrder = userSortBy;
    };
});

//filter for european countries over 1 million people
app.filter("myCustomFilter", function(){
    //x is the array item thats passed in the 'in' clause
    return function(x){
        if (x.continent === "Europe" && x.population > 1000000){
            return (x.capital + ", " + x.country);
        };
    };
});