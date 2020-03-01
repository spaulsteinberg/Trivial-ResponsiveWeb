//practice with lists and lists of obj printing
app.controller("repeatingElements", function($scope){
    $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                    'August', 'September', 'November', 'December'];
    $scope.cars = [{name: 'Ferrari', model: 'California Turbo', year: '2015'},
                    {name: 'Bentley', model: 'Continental', year: '2018'},
                    {name: 'Jaguar', model: 'F-Type R', year: '2017'}];
                
});