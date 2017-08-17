(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('WifiController', WifiController);

    WifiController.$inject = [
        '$state',
      '$http'
    ];

    function WifiController($state, $http) {
        var vm = this;
          $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/WF03').then(function (response){
        vm.planos = response.data;
        console.log(vm.planos);
      })
    }
})();