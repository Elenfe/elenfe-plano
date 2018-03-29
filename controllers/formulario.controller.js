(function () {
    'use strict';

    angular        
        .module('planosApp')
        .controller('FormularioController', FormularioController);

    FormularioController.$inject = [
      '$state',
      '$http',
      'localStorageService'
      
      
    ];

    function FormularioController($state, $http, localStorageService) {
      var vm = this;
      vm.registerUser = registerUser;
      vm.enviarFormulrio = enviarFormulrio;
      vm.aluno= {};
      
      function enviarFormulrio(){
        console.log(vm.aluno);
        localStorage.setItem(vm.aluno);
        localStorage.getItem(vm.aluno);

        // localStorage.setItem("PlanoComputEscolhido", id);
            // console.log(localStorage.getItem("escolhido"));
            // localStorage.getItem("PlanoComputEscolhido");
        }
      }
      
    function registerUser(registerData) {
      // LocalStorageService.store('aluno', vm.aluno);
      }
    
})();