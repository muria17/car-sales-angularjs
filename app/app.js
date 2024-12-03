// app.js
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    })
    .when('/websitebasic', {
        templateUrl: 'views/websitebasic.html',  
        controller: 'WebsiteBasicController'
    })
    .when('/customer', {
        templateUrl: 'views/customer.html',  
        controller: 'CustomerController'
    })
    .when('/userregistration', {
        templateUrl: 'views/userregistration.html',  
        controller: 'UserRegistrationController'
    })
    .otherwise({
        redirectTo: '/login'  
    });
}]);
