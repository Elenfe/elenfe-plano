(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('TabletController', TabletController);

    TabletController.$inject = [
        '$state',
//      '$http'
    ];

    function TabletController($state) {
        var vm = this;
//          $http.get('http://private-59658d-celulardireto2017.apiary-mock.com/planos/TBT01').then(function (response){
//        vm.planos = response.data;
//        console.log(data);
//      })
    }
})();