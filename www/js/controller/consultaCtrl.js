var modController = angular.module('mod_controller',[]);

modController.controller('ConsultaController', ['$scope', '$location', function($scope, $location) {

   $scope.numProcesso = "";

   $scope.submit = function()
   { 
      var url = "resultado/"+$scope.numProcesso;
      $location.url(url);
   }   

}]);

modController.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider.state('home', {
    url: '/home',
    views: {
      home: {
        templateUrl: 'consulta.html'
      }
    }
  });

  $stateProvider.state('resultado', {
    url: '/resultado/:numeroProcesso',
    views: {
      resultado: {
        templateUrl: 'resultado.html'
      }
    }
  });
});
