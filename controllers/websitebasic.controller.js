app.controller('WebsiteBasicController', ['$scope', '$location','websitebasic', function($scope, $location, websitebasic) {
    $scope.loading = true; // Mostra o loader antes de iniciar a requisição

    $scope.redirectToPage = function() {
        $location.path('/customer'); // Usando $location para navegação SPA
    };
    
    // Requisição ao backend para buscar os dados
    websitebasic.getCarStock().then(function(response) {
        $scope.carStock = response.data; // Armazena os dados no $scope
        $scope.loading = false; // Esconde o loader após receber a resposta
    }, function(error) {
        console.error('Erro ao obter dados dos carros:', error);
        $scope.loading = false; // Esconde o loader mesmo em caso de erro
    });
}]);
