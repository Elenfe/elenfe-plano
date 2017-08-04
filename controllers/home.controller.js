(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$state',
      '$http'
    ];

    function HomeController($state) {
        var vm = this;
          
    }
  
  function HomeController($http) {
        var vm = this;
          
    }
})();