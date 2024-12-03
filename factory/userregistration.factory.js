app.factory('userregistration', ['$http', function($http) {
    var service = {};

    service.createNewUser = function(data) {
        return $http.post('http://localhost:8080/userAccount/createNewUser' , data)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    return service;
}]);