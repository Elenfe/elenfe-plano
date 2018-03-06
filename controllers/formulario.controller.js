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
        $(function(){
            var tbClientes = localStorage.getItem("tbClientes");// Recupera os dados armazenados
            tbClientes = JSON.parse(tbClientes); // Converte string para objeto
            if(tbClientes == null) // Caso não haja conteúdo, iniciamos um vetor vazio
            tbClientes = [];
        });
         
        function Adicionar() {
            var cliente = JSON.stringify({
                nome : $("#nome").val(),
                email : $("#email").val(),
                nascimento : $("#data").val(),
                cpf : $("#cpf").val(),
                telefone : $("#tel").val()
            });

            tbClientes.push(cliente);
	        localStorage.setItem("tbClientes", JSON.stringify(tbClientes));
	        alert("Registro adicionado.");
	        return true;                               
        }
        
        $("#frmCadastro").on("submit",function(){
            console.log("clicado");
            return Adicionar();   
        });
    }
})();