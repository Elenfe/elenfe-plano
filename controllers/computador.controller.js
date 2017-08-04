(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('ComputadorController', ComputadorController);

    ComputadorController.$inject = [
        '$state',
//      '$http'
    ];

    function ComputadorController($state) {
        var vm = this;
//          $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/CPT02').then(function (response){
//        vm.planos = response.data;
//        console.log(data);
//      })
    }
})();