'use strict';

/**
 * @ngdoc overview
 * @name clientAngularjsApp
 * @description
 * # clientAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('clientAngularjsApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        template: '<main/>',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
