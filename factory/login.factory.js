app.factory('login', ['$http', function($http) {
    var service = {};

    service.validPassword = function(loginData) {
        return $http.post('https://carsales-production.up.railway.app/userAccount/validUserAndPassword' , loginData)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    return service;
}]);