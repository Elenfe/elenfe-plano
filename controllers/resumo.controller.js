(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('ResumoController', ResumoController);

    ResumoController.$inject = [
        '$state',
      '$http'
    ];

    function ResumoController($state, $http) {
        var vm = this;

    }
})();