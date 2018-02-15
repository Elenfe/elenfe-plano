(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('TabletController', TabletController);

    TabletController.$inject = [
        '$state',
      '$http'
    ];

    function TabletController($state, $http) {
        var vm = this;
            $http.get('https://planostbt01.firebaseio.com/TBT01.json').then(function (response){
        vm.planos = response.data;
        console.log(vm.planos);
      })
    }
})();