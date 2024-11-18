app.controller('WebsiteBasicController', ['$scope', '$location','websitebasic', function($scope, $location, websitebasic) {
    $scope.loading = true; 
    $scope.ads = [];
    $scope.isFormVisible = false; 
    $scope.newAds = {};
    $scope.errorMessage = '';

    $scope.redirectToPage = function() {
        $location.path('/customer'); 
    };

    $scope.loadAds = function() {
        $scope.loading = true;
        websitebasic.getCarStock()
            .then(function(response) {
                $scope.carStock = response.data;
            })
            .catch(function(error) {
                console.error('Erro ao obter dados dos clientes:', error);
            })
            .finally(function() {
                $scope.loading = false;
            });
    };
    
    $scope.loadAds();
    
    $scope.closeModal = function() {
        $scope.isFormVisible = false;
        $scope.newAds = {}; 
    };

    $scope.addAds = function() {
        if ($scope.newAds.name && $scope.newAds.value && $scope.newAds.description && $scope.newAds.urlImage) {
            $scope.newAds.adsId = 1;
            $scope.saveAds($scope.newAds);
        } else {
            $scope.errorMessage = '*Os campos de Name e Telephone não podem ficar em branco.';
        }
         
        $scope.newAds = {};
        $scope.isFormVisible = false;
    };

    $scope.saveAds = function(){
        $scope.loading = true; 
        websitebasic.saveAds($scope.newAds).then(function(response) {
            if (response.status === 200) {
                $scope.carStock = response.data; 
                $scope.loadAds();
                $scope.loading = false; 
                $scope.closeModal();
            } else {
                $scope.errorMessage = "Erro ao validar criar ads. Tente novamente";
                $scope.loading = false; 
            }
        }).catch(function(error) {
            $scope.errorMessage = "Erro ao validar criar ads. Tente novamente.";
            $scope.loading = false; 
        });
    };

    $scope.deleteAds = function(carStockId, index) {
        $scope.loading = true; 
        websitebasic.deleteAds(carStockId)
        .then(function(response) {
            $scope.ads.splice(index,1);
            $scope.loadAds();
            $scope.loading = false; 

        })
        .catch(function(error) {
            $scope.errorMessage = "Erro ao excluir ads. Tente novamente";
            $scope.loading = false; 

        });
};
}]);
