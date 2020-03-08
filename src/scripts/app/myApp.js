//defines a module named myApp...allows for controllers, directives, etc...
var app = angular.module("myApp", []);

//create a custom directive
app.directive("testDirective", function(){
    return {
        restrict: "EA", //restricted to attributes and elements
        template: "<h1> I am a custom directive! </h1>" //template is the content
    };
});