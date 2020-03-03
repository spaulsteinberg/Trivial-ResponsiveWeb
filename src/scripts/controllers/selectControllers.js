
app.controller("selectFilterBy", function($scope){
    $scope.cars = [ 
        {manufacturer: "Ferrari", year: 2019, model:"F8 Tributo"},
        {manufacturer: "Bentley", year: 2018, model:"Continental GT"},
        {manufacturer: "Rolls-Royce", year: 2016, model: "Wraith"},
        {manufacturer: "Jaguar", year: 2020, model: "F-Type R"},
        {manufacturer: "Ferrari", year: 2015, model: "458 Italia"}
    ];
    $scope.altCars = {
        Ferrari: {model: "F8", year: 2020, origin: "Italy"},
        Bentley: {model: "Continental GT", year: 2018, origin: "UK"},
        Rolls_Royce: {model: "Wraith", year: 2016, origin: "UK"},
        Jaguar: {model: "F-Type R", year: 2020, origin: "UK"},
        Ford: {model: "GT", year: 2020, origin: "USA"}
    };

})