//establishing rootScope: .run() is basically a system config
app.run(function($rootScope){
    $rootScope.msg = "I am the root scope!";
});