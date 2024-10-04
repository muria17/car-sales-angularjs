// controllers/login.controller.js
angular.module('myApp') // Injete o módulo existente
.controller('LoginController', ['$scope', '$location','$rootScope', 'login', function($scope, $location, $rootScope, login) {

    $scope.loginData = {};  // Objeto para armazenar username e password
    $scope.errorMessage = '';

    $scope.redirectToPage = function() {
        if ($scope.loginData.login && $scope.loginData.userAccountPassword) {
            $scope.errorMessage = '';
            $scope.validateUserNameAndPassword();
        } else {
            $scope.errorMessage = '*Os campos de Username e Password não podem ficar em branco.';
        }
    };

    $scope.validateUserNameAndPassword = function(){
        $scope.loading = true; 
        $rootScope.isLoggedIn = true; 
        login.validPassword($scope.loginData).then(function(response) {
            if (response.status === 200) {
                $rootScope.isLoggedIn = true; 
                $scope.userAccount = response.data; 
                $scope.loading = false; 
                $location.path('/websitebasic'); 
            } else {
                $scope.errorMessage = "Usuário ou senha inválidos";
                $scope.loading = false; 
            }
        }).catch(function(error) {
            $scope.errorMessage = "Erro ao validar o usuário. Tente novamente.";
            $scope.loading = false; 
        });
    };

    $scope.userRegistration = function(){
        $location.path('/userregistration'); 
    };
}]);



