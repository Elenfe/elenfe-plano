(function () {
    'use strict';

    angular
        .module('planosApp')
        .controller('FormularioController', FormularioController);

    FormularioController.$inject = [
        '$state',
      '$http'
    ];

    function FormularioController($state, $http) {
        var vm = this;

        vm.salvarformulario = function() {            
                var nome = localStorage.getItem("nome");
                var email = localStorage.getItem("email");
                var nascimento = localStorage.getItem("nascimento");
                var cpf = localStorage.getItem("cpf");
                var telefone = localStorage.getItem("telefone");
                
                if(nome !== null){
                   $("#nome").val(nome);
                }
                if(email !== null){
                  $("#email").val(email);
                }
                if(nascimento !== null){
                    $("#data").val(nascimento);
                 }
                 if(cpf !== null){
                    $("#cpf").val(cpf);
                 }
                 if(telefone !== null){
                    $("#tel").val(telefone);
                 }
                            
                localStorage.setItem("nome",  $("#nome").val());
                localStorage.setItem("email",  $("#email").val());
                localStorage.setItem("nascimento",  $("#data").val());
                localStorage.setItem("cpf",  $("#cpf").val());
                localStorage.setItem("telefone",  $("#tel").val());
                $("#enviado").html("Registro enviado!");
              
        }      
    }
})();