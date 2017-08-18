(function() {
    'use strict';
    
    angular
        .module('planosApp').filter("name", function(){
      return function (input){
       var listaDeNomes = input.split(" ");
       var listaDeNomesFormatada = listaDeNomes.map(function (nome){
         if (/(da | de | do | dos)/.test(nome)) return nome;
         return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
       });
       return listaDeNomesFormatada.join(" ");
      };      
    })
})();