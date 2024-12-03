app.factory('websitebasic', ['$http', function($http) {
    var service = {};

    service.getCarStock = function() {
        return $http.get('http://localhost:8080/carStock' )
            .then(function(response) {
                return response; 
            }, function(error) {
                return error;  
            });
    };

    service.saveAds = function(newAds) {
        return $http.post('http://localhost:8080/carStock' , newAds)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    service.deleteAds = function(AdsId) {
        return $http.delete('http://localhost:8080/carStock/' + AdsId)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };
    return service;
}]);
