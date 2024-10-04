app.factory('userregistration', ['$http', function($http) {
    var service = {};

    service.createNewUser = function(Data) {
        return $http.post('https://carsales-production.up.railway.app/userAccount/createNewUser' , Data)
            .then(function(response) {
                console.log("Dados enviados para validação:", Data);
                return response;  
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  
            });
    };

    return service;
}]);