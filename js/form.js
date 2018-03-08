function Adicionar() {
var usuario = JSON.stringify({
Nome: $("#txtNome").val(),
email: $("#txtEmail").val(),
Data: $("#data").val(),
CPF: $("#cpf").val(),
Telefone: $("#tel").val(),
});
if ($("#txtNome").val().length == 0 || $('#txtEmail').val().length == 0 || $("#data").val().length == 0 || $("#cpf").val().length == 0 || $("#tel").val().length == 0 ){
alert('Preencha os campos vazios');
}
else{
tbUsuarios.push(usuario);
localStorage.setItem("tbUsuarios", JSON.stringify(tbUsuarios));
alert("Usuário Cadastrado com Sucesso!");
return true;
}

}

var tbUsuarios;
$(function () {
tbUsuarios = localStorage.getItem("tbUsuarios");// Recupera os dados armazenados
tbUsuarios = JSON.parse(tbUsuarios); // Converte string para objeto
if (tbUsuarios == null) // Caso não haja conteúdo, iniciamos um vetor vazio
tbUsuarios = [];
});

function voltar(){
  localStorage.clear();
}