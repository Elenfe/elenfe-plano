(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('FormularioController', FormularioController);

    FormularioController.$inject = [
      '$state',
      '$http',
      'LocalStorageService'
    ];

    function FormularioController($state, $http, LocalStorageService) {
      var vm = this;
      vm.registerUser = registerUser;
      vm.aluno= {};     
    
      
    function registerUser(registerData) {
      LocalStorageService.store('aluno', vm.aluno);
      }
    }
})();