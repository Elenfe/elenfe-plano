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

        vm.salvarEscolha = function(id) {
            localStorage.setItem("escolhido", id);
            // console.log(localStorage.getItem("escolhido"));
            localStorage.getItem("escolhido");
        }
        console.log(localStorage.getItem("escolhido"));
      
    }
})();