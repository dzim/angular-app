'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
var app = angular
    .module('angularApp', [
	'ngAnimate',
	'ngCookies',
	'ngResource',
	'ngRoute',
	'ngSanitize',
	'ngTouch',
	'ui.bootstrap',
	'firebase'
  ])
    .constant('FIREBASE_URL', 'fill here');



app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/posts/:postId', {
        templateUrl: 'views/showpost.html',
        controller: 'PostViewCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
