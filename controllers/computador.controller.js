(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('ComputadorController', ComputadorController);

    ComputadorController.$inject = [
        '$state',
      '$http'
    ];

    function ComputadorController($state, $http) {
        var vm = this;
            $http.get('https://planoscpt02.firebaseio.com/CPT02.json').then(function (response){
        vm.planos = response.data;
        console.log(vm.planos);
      })
    }
})();