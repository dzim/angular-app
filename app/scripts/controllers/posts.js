'use strict';

app.controller('PostsCtrl', function ($scope, Post) {
// begin rating
    $scope.storyID = 'nummer54';
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
// end rating
//    $scope.posts = Post.all; // read from Firebase
    $scope.posts = Post.all($scope.storyID);
    $scope.post = {title: '', rate: $scope.rate};

    $scope.submitPost = function() {
//	$scope.posts.push($scope.post);
//	Post.create($scope.post).then(function() {
	Post.create($scope.post,$scope.storyID).then(function() {
	    $scope.post = {title: '', rate: $scope.rate};
	});

    };

    $scope.deletePost = function(post) {
//	$scope.posts.splice(index,1);
	Post.delete(post);
    };
});



