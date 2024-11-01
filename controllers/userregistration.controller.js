angular.module('myApp') 
.controller('UserRegistrationController', ['$scope', '$location','$rootScope','userregistration',  function($scope, $location, $rootScope, userRegistration) {

    $scope.data = {};  
    $scope.errorMessage = '';

    $scope.validateData = function() {
        if ($scope.data.login && $scope.data.userAccountPassword && $scope.data.customerId) {
            $scope.createNewUser();
        } else {
            $scope.errorMessage = '*Os campos de Username, Password e Customer não podem ficar em branco.';
        }
    };

    $scope.createNewUser = function() {
        $scope.loading = true; 
        $rootScope.isLoggedIn = true; 
        userRegistration.createNewUser($scope.data).then(function(response) {
            if (response.status === 200) {
                $rootScope.isLoggedIn = true; 
                $scope.userAccount = response.data; 
                $scope.loading = false; 
                $scope.successMessage = "Cadastro realizado com sucesso!";
                $location.path('/login'); 
            } else {
                $scope.errorMessage = "Tivemos um problema ao cadastrar o seu usuario, tente novamente mais tarde.";
                $scope.loading = false; 
            }
        }).catch(function(error) {
            $scope.errorMessage = "Erro ao validar o usuário. Tente novamente.";
            $scope.loading = false; 
        });
    };
}]);



