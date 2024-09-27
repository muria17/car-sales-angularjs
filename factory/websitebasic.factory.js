app.factory('websitebasic', ['$http', function($http) {
    var service = {};

    service.getCarStock = function() {
        return $http.get('https://carsales-production.up.railway.app/carStock' )
            .then(function(response) {
                return response; 
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  
            });
    };

    return service;
}]);
