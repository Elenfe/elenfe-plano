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
      
    }
})();