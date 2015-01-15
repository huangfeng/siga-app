var modConsultaProcesso = angular.module('starter');

modConsultaProcesso.controller('ConsultaController', ['$scope','$window', function($scope, $window) {

   $scope.numProcesso = "";  

   $scope.buscarProcesso = function () {    

 		    var url = "http://192.168.1.50:8081/sigaex/servicos/ExService";
		    var params = new SOAPClientParameters();

		    var nProcesso = $scope.numProcesso;
		    params.add("numeroProcesso", nProcesso);

		    var resposta = SOAPClient.invoke(url, "consultaMovimentacaoProcesso", params, false, null);    
		    $window.alert(resposta);
   };

}]);


