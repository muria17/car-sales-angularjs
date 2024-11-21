angular.module('myApp')
.factory('CustomerService', ['$http', function($http) {
    var service = {};

    service.getCustomers = function() {
        return $http.get('https://carsales-production.up.railway.app/client' ); 
    };

    service.saveCustomer = function(newCustomer) {
        return $http.post('https://carsales-production.up.railway.app/client' , newCustomer)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    service.deleteCustomer = function(customerId) {
        return $http.delete('https://carsales-production.up.railway.app/client/' + customerId)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    return service;
}]);

