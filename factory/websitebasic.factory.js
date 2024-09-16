app.factory('websitebasic', ['$http', function($http) {
    var service = {};

    // Requisição para obter os dados do estoque de carros
    service.getCarStock = function() {
        return $http.get('http://localhost:8080/carStock')
            .then(function(response) {
                return response;  // Retorna os dados em caso de sucesso
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  // Retorna o erro em caso de falha
            });
    };

    return service;
}]);
