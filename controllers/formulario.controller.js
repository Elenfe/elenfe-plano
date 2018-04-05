(function () {
    'use strict';

    angular        
        .module('planosApp')
        .controller('FormularioController', FormularioController);

    FormularioController.$inject = [
      '$state',
      '$http'
      
      
    ];

    function FormularioController($state, $http) {
      var vm = this;
      vm.registerUser = registerUser;
      vm.enviarFormulrio = enviarFormulrio;
      vm.aluno= {};
      function enviarFormulrio(){
        console.log(vm.aluno);
        
        }
      }
      
    function registerUser(registerData) {
      // localStorageService.store('aluno', vm.aluno);
      }
    
})();