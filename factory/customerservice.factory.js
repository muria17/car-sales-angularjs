angular.module('myApp')
.factory('CustomerService', ['$http', function($http) {
    var service = {};

    service.getCustomers = function() {
        return $http.get('http://localhost:8080/client'); 
    };

    return service;
}]);

