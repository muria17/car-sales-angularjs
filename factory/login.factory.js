app.factory('login', ['$http', function($http) {
    var service = {};

    service.validPassword = function(loginData) {
        return $http.post('https://carsales-production.up.railway.app/userAccount', loginData)
            .then(function(response) {
                return response;  
            }, function(error) {
                console.error('Erro na requisição ao backend:', error);
                return error;  
            });
    };

    return service;
}]);