(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('TesteController', TesteController);

    TesteController.$inject = [
        '$state',
      '$http'
    ];

    function TesteController($state, $http) {
        var vm = this;
          $http.get('https://reqres.in/api/unknown').then(function (response){
        vm.testes = response.data;
        console.log(vm.testes);
      })
    }
})();