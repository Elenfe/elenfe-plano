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
            $http.get('https://planoswifi03.firebaseio.com/WIFI03.json').then(function (response){
        vm.pla = response.data;
        console.log(vm.pla);
      })
    }
})();