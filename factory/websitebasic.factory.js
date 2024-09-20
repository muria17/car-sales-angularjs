app.factory('websitebasic', ['$http', function($http) {
    var service = {};

    service.getCarStock = function() {
        return $http.get('http://localhost:8080/carStock')
            .then(function(response) {
                return response; 
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  
            });
    };

    return service;
}]);
