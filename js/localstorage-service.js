(function () {
  'use strict';

  angular
    .service('LocalStorageService', LocalStorageService)
    .module('planosApp'[]);    

  LocalStorageService.$inject = ['$q'];

  function LocalStorageService($q) {

    var vm = this;

    vm.store = store;
    vm.remove = remove;
    vm.get = get;

    function store(key, value) {
      var deferred = $q.defer();

      var value = JSON.stringify(value);
      localStorage.setItem(key, value);
      deferred.resolve(true);
      return deferred.promise;
    }

    function get(key) {
      var deferred = $q.defer();

      if (localStorage.getItem(key)) {
        var item = localStorage.getItem(key);
        deferred.resolve(JSON.parse(item));
      } else {
        deferred.reject(false);
      }
      return deferred.promise;
    }

    function remove(key) {
      var deferred = $q.defer();

      localStorage.removeItem(key);
      deferred.resolve(true);
      return deferred.promise;
    }
  }
})();
