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
        // console.log(vm.aluno);
        vm.dadosFormulario = vm.aluno;
        var jsonDadosFormulario = JSON.stringify(vm.dadosFormulario); 
        localStorage.setItem('dadosFormulario', jsonDadosFormulario);
        $state.go("resumo");
        }
      }
      
    function registerUser(registerData) {
      // localStorage.setItem('dadosFormulario', vm.dadosFormulario);
      }
    
})();