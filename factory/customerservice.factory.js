angular.module('myApp')
.factory('CustomerService', ['$http', function($http) {
    var service = {};

    service.getCustomers = function() {
        return $http.get('https://carsales-production.up.railway.app/client' );     };

    service.saveCustomer = function(newCustomer) {
        return $http.post('https://carsales-production.up.railway.app/client' , newCustomer)
            .then(function(response) {
                console.log("Dados enviados para validação:", newCustomer);
                return response;  
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  
            });
    };

    service.deleteCustomer = function(customerId) {
        return $http.delete('https://carsales-production.up.railway.app/client/' + customerId)
            .then(function(response) {
                console.log("Dados enviados para validação:", response);
                return response;  
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  
            });
    };

    return service;
}]);

