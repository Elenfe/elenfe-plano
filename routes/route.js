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
                        controller: 'HomeController',
                        controllerAs:'vm',
                        templateUrl: 'views/home.html'
                    }
                }
            })
      
            .state('plataforma', {
                url: '/plataforma',
                views: {
                    'content': {
                        controller: 'PlataformaController',
                        controllerAs:'vm',
                        templateUrl: 'views/plataforma.html'
                    }
                }
            })
      
            .state('tablet', {
                url: '/tablet',
                views: {
                    'content': {
                        controller: 'TabletController',
                        controllerAs:'vm',
                        templateUrl: 'views/tablet.html'
                    }
                }
            })
      
            .state('wi-fi', {
                url: '/wi-fi',
                views: {
                    'content': {
                        controller: 'WifiController',
                        controllerAs:'vm',
                        templateUrl: 'views/wi-fi.html'
                    }
                }
            })
        
            .state('computador', {
                url: '/computador',
                views: {
                    'content': {
                        controller: 'ComputadorController',
                        controllerAs:'vm',
                        templateUrl: 'views/computador.html'
                    }
                }
            })
      
            .state('formulario', {
                url: '/formulario',
                views: {
                    'content': {
                        controller: 'FormularioController',
                        controllerAs:'vm',
                        templateUrl: 'views/formulario.html'
                    }
                }
            });
    };
}());