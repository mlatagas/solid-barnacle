(function () {
    'use strict'
    angular
        .module('app')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function routeConfig($stateProvider, $urlRouterProvider) {
        // $urlRouterProvider.otherwise('/registration');
        $stateProvider.state('login', {
            url: "/login",
            controller: "LoginController",
            controllerAs: "vm",
            templateUrl: "templates/login.html"
  
        }).state('homePage', {
            url: "/home",
            controller: "LoginController",
            controllerAs: "vm",
            templateUrl: "templates/home.html"
        }).state('buttons', {
            url: "/buttons",
            controller: "DatabaseController",
            controllerAs: "vm",
            templateUrl: "templates/buttons.html"
        });
    }


}());