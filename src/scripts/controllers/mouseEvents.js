//function to alter the count for mouse events
app.controller("mouseHovering", function($scope){
    $scope.count = 0;
    $scope.hover = function(){
        $scope.count++;
    }
    $scope.leave = function(){
        $scope.count = 0;
    };
});

//function to alter menu shown on click
app.controller("showMenu", function($scope){
    $scope.isShowing = false;
    $scope.menuItems = ['Hamburger', 'Hot Dog', 'House Salad', 'Wings'];
    $scope.onMenuButtonClick = function(){
        $scope.isShowing = !$scope.isShowing;
    };
});

//function to practice passing events
app.controller("hoverEventCoords", function($scope){
    $scope.getCoords = function(eventObj){
        $scope.xCoord = eventObj.clientX;
        $scope.yCoord = eventObj.clientY;
    };
});