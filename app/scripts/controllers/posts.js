'use strict';

app.controller('PostsCtrl', function ($scope) {

    $scope.rate = 7;
    $scope.max = 10;
    $scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
    $scope.percent = 100 * (value / $scope.max);
  };

  $scope.ratingStates = [
    {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
    {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
    {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
    {stateOn: 'glyphicon-heart'},
    {stateOff: 'glyphicon-off'}
  ];
    $scope.posts = [];
    $scope.post = {url: 'http://', title: '', rate: $scope.rate};

    $scope.submitPost = function() {
	$scope.posts.push($scope.post);
	$scope.post = {url: 'http://', title: '', rate: $scope.rate};
    };

    $scope.deletePost = function(index) {
	$scope.posts.splice(index,1);
    };
});


