(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('ResumoController', ResumoController);

    ResumoController.$inject = [
        '$state',
      '$http'
    ];

    function ResumoController($state, $http) {
        var vm = this;
        vm.jsonDadosAluno = localStorage.getItem('dadosFormulario');
        vm.dadosFormulario = JSON.parse(vm.jsonDadosAluno);

        vm.id =localStorage.getItem("escolhido");

        if(vm.id == "TBT01"){
            vm.device = "Tablet";
        }else if(vm.id == "CPT02"){
            vm.device = "computador";
        }else if(vm.id == "WF03"){
            vm.device = "WIFI";
        }


        vm.tablet = localStorage.getItem("PlanoTabletEscolhido");
        if(vm.tablet == "TI00001NA_NOVA_LINHA"){
            vm.valor = "21,50";
        }else if(vm.tablet == "TI00002NA_NOVA_LINHA"){
            vm.valor = "59,90";
        }else if(vm.tablet == "TI00003NA_NOVA_LINHA"){
            vm.valor = "72,60";
        }else if(vm.tablet == "TI00004NA_NOVA_LINHA"){
            vm.valor = "81,10";
        }else if(vm.tablet == "TI00005NA_NOVA_LINHA"){
            vm.valor = "105,80";
        }

        vm.computador = localStorage.getItem("PlanoComputEscolhido");
        if(vm.computador == "CI00001NA_NOVA_LINHA"){
            vm.valor = "47,60";
        }else if(vm.computador == "CI00002NA_NOVA_LINHA"){
            vm.valor = "59,90";
        }else if(vm.computador == "CI00003NA_NOVA_LINHA"){
            vm.valor = "72,60";
        }


        vm.wifi = localStorage.getItem("PlanoWifiEscolhido");
        if(vm.wifi == "WI00001NA_NOVA_LINHA"){
            vm.valor = "47,60";
        }else if(vm.wifi == "WI00002NA_NOVA_LINHA"){
            vm.valor = "59,90";
        }

        localStorage.clear();
      

        // // $http.get('https://plataformas-dc8cb.firebaseio.com/plataformas.json').then(function (response){
        // //         vm.plataformas = response.data;
        // //         var plataformas = vm.plataformas; 
        // //         console.log(plataformas); 
        // //     })
        
        //     $http.get('https://planostbt01.firebaseio.com/TBT01.json').then(function (response){
        //         vm.planosTablet = response.data;
        //         var planosTablet = vm.planosTablet;
        //         console.log(planosTablet); 
        //     })

        //     $http.get('https://planoscpt02.firebaseio.com/CPT02.json').then(function (response){
        //         vm.planosComputador = response.data;                
        //         var planosComputador = vm.planosComputador;
        //         console.log(planosComputador); 
        //     })

        //     $http.get('https://planoswifi03.firebaseio.com/WIFI03.json').then(function (response){
        //         vm.planosWIFI = response.data;
        //         var planosWIFI = vm.planosWIFI;
        //         console.log(planosWIFI);
        //     })
    }
})();