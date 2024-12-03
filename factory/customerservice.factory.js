angular.module('myApp')
.factory('CustomerService', ['$http', function($http) {
    var service = {};

    service.getCustomers = function() {
        return $http.get('http://localhost:8080/client' ); 
    };

    service.saveCustomer = function(newCustomer) {
        return $http.post('http://localhost:8080/client' , newCustomer)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    service.deleteCustomer = function(customerId) {
        return $http.delete('http://localhost:8080/client/' + customerId)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    return service;
}]);

