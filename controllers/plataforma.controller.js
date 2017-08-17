(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('PlataformaController', plataformaController);

    plataformaController.$inject = [
        '$state',
        '$http'
    ];
  
  function plataformaController($state, $http) {
        var vm = this;
      $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/plataformas').then(function (response){
        vm.plataformas = response.data;
        console.log(vm.plataformas);
        
      })
    }
})();