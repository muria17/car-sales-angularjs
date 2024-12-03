app.factory('login', ['$http', function($http) {
    var service = {};

    service.validPassword = function(loginData) {
        return $http.post('http://localhost:8080/userAccount/validUserAndPassword' , loginData)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    return service;
}]);