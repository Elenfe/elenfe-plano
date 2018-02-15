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
        $http.get('https://plataformas-dc8cb.firebaseio.com/plataformas.json').then(function (response){
        vm.plataformas = response.data;
        console.log(vm.plataformas);
        
      })
    }
})();