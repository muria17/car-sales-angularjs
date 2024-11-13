app.controller('CustomerController', ['$scope', '$location', 'CustomerService', function($scope,$location, CustomerService) {
    $scope.customers = [];
    $scope.isFormVisible = false; 
    $scope.newCustomer = {};
    $scope.errorMessage = '';

    $scope.loadCustomers = function() {
        $scope.loading = true;
        CustomerService.getCustomers()
            .then(function(response) {
                $scope.customers = response.data;
            })
            .catch(function(error) {
                console.error('Erro ao obter dados dos clientes:', error);
            })
            .finally(function() {
                $scope.loading = false;
            });
    };
    
    $scope.loadCustomers();

    $scope.redirectToPage = function() {
        $location.path('/websitebasic'); 
    };

    $scope.closeModal = function() {
        $scope.isFormVisible = false;
        $scope.newCustomer = {}; 
    };

    $scope.addCustomer = function() {
        if ($scope.newCustomer.name && $scope.newCustomer.telephone) {
            $scope.saveCustomer($scope.newCustomer);
        } else {
            $scope.errorMessage = '*Os campos de Name e Telephone não podem ficar em branco.';
        }
         
        $scope.newCustomer = {};
        $scope.isFormVisible = false;
    };

    $scope.saveCustomer = function(){
        $scope.loading = true; 
        CustomerService.saveCustomer($scope.newCustomer).then(function(response) {
            if (response.status === 200) {
                $scope.customer = response.data; 
                $scope.loadCustomers();
                $scope.loading = false; 
                $scope.closeModal();
            } else {
                $scope.errorMessage = "Erro ao validar criar customer. Tente novamente";
                $scope.loading = false; 
            }
        }).catch(function(error) {
            $scope.errorMessage = "Erro ao validar criar customer. Tente novamente.";
            $scope.loading = false; 
        });
    };

    $scope.deleteCustomer = function(customerId, index) {
        $scope.loading = true; 
        CustomerService.deleteCustomer(customerId)
        .then(function(response) {
            $scope.customers.splice(index,1);
            $scope.loadCustomers();
            $scope.loading = false; 

        })
        .catch(function(error) {
            $scope.errorMessage = "Erro ao excluir customer. Tente novamente";
            $scope.loading = false; 

        });
};


}]);

