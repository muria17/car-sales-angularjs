// app.js
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/websitebasic', {
        templateUrl: 'views/websitebasic.html',  // Página que será carregada após login
        controller: 'WebsiteBasicController'
    })
    .when('/customer', {
        templateUrl: 'views/customer.html',  // Página que será carregada após login
        controller: 'CustomerController'
    })
    .when('/userregistration', {
        templateUrl: 'views/userregistration.html',  // Página que será carregada após login
        controller: 'UserRegistrationController'
    })
    .otherwise({
        redirectTo: '/login'  // Redireciona para login como padrão
    });
}]);
