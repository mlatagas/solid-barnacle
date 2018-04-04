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
            templateUrl: "login.html"
  
        }).state('homePage', {
            url: "/home",
            controller: "LoginController",
            controllerAs: "vm",
            templateUrl: "home.html"
  
        }).state('buttons', {
            url: "/bottons",
            controller: "LoginController",
            controllerAs: "vm",
            templateUrl: "buttons.html"
  
        })
    }


}());