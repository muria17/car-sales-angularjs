angular.module('myApp') 
.controller('UserRegistrationController', ['$scope', '$location','$rootScope','userregistration',  function($scope, $location, $rootScope, userRegistration) {

    $scope.Data = {};  
    $scope.errorMessage = '';

    $scope.validateData = function() {
        if ($scope.Data.login && $scope.Data.userAccountPassword) {
            $scope.createNewUser();
        } else {
            $scope.errorMessage = '*Os campos de Username e Password não podem ficar em branco.';
        }
    };

    $scope.createNewUser = function() {
        $scope.loading = true; 
        $rootScope.isLoggedIn = true; 
        userRegistration.createNewUser($scope.loginData).then(function(response) {
            if (response.status === 200) {
                $rootScope.isLoggedIn = true; 
                $scope.userAccount = response.data; 
                $scope.loading = false; 
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



