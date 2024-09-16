app.controller('CustomerController', ['$scope', '$location', 'CustomerService', function($scope,$location, CustomerService) {
    // Inicia o array de clientes vazio
    $scope.customers = [];

    $scope.redirectToPage = function() {
        $location.path('/websitebasic'); // Usando $location para navegação SPA
    };
    $scope.loading = true; // Mostra o loader antes de iniciar a requisição

    CustomerService.getCustomers().then(function(response) {
        $scope.customers = response.data; // Armazena os dados no $scope
        $scope.loading = false; // Esconde o loader após receber a resposta
    }, function(error) {
        console.error('Erro ao obter dados dos clientes:', error);
        $scope.loading = false; // Esconde o loader mesmo em caso de erro
    });
}]);

