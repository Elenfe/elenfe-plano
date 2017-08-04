(function () {
    'use strict';

    angular
        .module('planosApp')
        .config(AppRouter);

    AppRouter.$inject = ['$stateProvider', '$urlRouterProvider'];

    function AppRouter($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                views: {
                    'content': {
                        controller: 'HomeController as vm',
                        templateUrl: 'views/home.html'
                    }
                }
            })
        
            .state('plataforma', {
                url: '/plataforma',
                views: {
                    'content': {
                        controller: 'PlataformaController as vm',
                        templateUrl: 'views/plataforma.html'
                    }
                }
            })
      
            .state('tablet', {
                url: '/tablet',
                views: {
                    'content': {
                        controller: 'TabletController as vm',
                        templateUrl: 'views/tablet.html'
                    }
                }
            })
      
            .state('wifi', {
                url: '/wifi',
                views: {
                    'content': {
                        controller: 'WifiController as vm',
                        templateUrl: 'views/wifi.html'
                    }
                }
            })
        
            .state('computador', {
                url: '/computador',
                views: {
                    'content': {
                        controller: 'ComputadorController as vm',
                        templateUrl: 'views/computador.html'
                    }
                }
            })
      
            .state('formulario', {
                url: '/formulario',
                views: {
                    'content': {
                        controller: 'FormularioController as vm',
                        templateUrl: 'views/formulario.html'
                    }
                }
            });

    };
}());