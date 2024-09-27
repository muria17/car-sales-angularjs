angular.module('myApp')
.factory('CustomerService', ['$http', function($http) {
    var service = {};

    service.getCustomers = function() {
        return $http.get('https://carsales-production.up.railway.app/client' ); 
    };

    return service;
}]);

