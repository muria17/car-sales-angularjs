// controllers/login.controller.js
angular.module('myApp') // Injete o módulo existente
.controller('LoginController', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope) {
    console.log("LoginController carregado");

    $scope.loginData = {
        username: '',
        password: ''
    };

    $scope.errorMessage = '';

    $scope.redirectToPage = function() {
        console.log("Botão de login clicado");

        if ($scope.loginData.username && $scope.loginData.password) {
            console.log("Dados de login preenchidos");

            $scope.errorMessage = '';
            $scope.validateUserNameAndPassword();
        } else {
            console.log("Campos de login vazios");

            $scope.errorMessage = '*Os campos de Username e Password não podem ficar em branco.';
        }
    };

    $scope.validateUserNameAndPassword = function(){
        console.log("Validando usuário...");
        $rootScope.isLoggedIn = true; // Usuário logado com sucesso
        console.log("Login bem-sucedido. Redirecionando para /websitebasic");
        $location.path('/websitebasic'); // Usando $location para navegação SPA
    };
}]);



