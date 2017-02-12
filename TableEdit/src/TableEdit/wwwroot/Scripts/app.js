(function () {
    'use strict';

    angular.module('tableEditApp', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {        
        $routeProvider.when('/orders',
        {
            templateUrl: 'index.html',
            controller: 'TableEditController'
        });
        $routeProvider.otherwise({ redirectTo: '/orders' });
    });
})();