app.factory('websitebasic', ['$http', function($http) {
    var service = {};

    service.getCarStock = function() {
        return $http.get('https://carsales-production.up.railway.app/carStock' )
            .then(function(response) {
                return response; 
            }, function(error) {
                return error;  
            });
    };

    service.saveAds = function(newAds) {
        return $http.post('https://carsales-production.up.railway.app/carStock' , newAds)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };

    service.deleteAds = function(AdsId) {
        return $http.delete('https://carsales-production.up.railway.app/carStock/' + AdsId)
            .then(function(response) {
                return response;  
            }, function(error) {
                return error;  
            });
    };
    return service;
}]);
