'use strict';


// Declare app level module which depends on filters, and services
angular.module('demoApp', ['ngRoute', 'demoApp.filters', 'demoApp.services', 'demoApp.directives', 'demoApp.controllers'
]);

angular.module('demoApp').config(['$routeProvider',

    function($routeProvider) {
        $routeProvider.when('/home', {templateUrl: 'pages/home.html', controller: 'HomeController'});
        $routeProvider.when('/basics', {templateUrl: 'pages/basics.html', controller: 'BasicsController'});
        $routeProvider.when('/formValidation', {templateUrl: 'pages/form-validation.html', controller: 'FormValidationController'});
        $routeProvider.when('/directive', {templateUrl: 'pages/directives.html', controller: 'DirectivesController'});
        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
