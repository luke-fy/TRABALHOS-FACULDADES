var button = document.getElementById('button');
var email = document.getElementById('email');
var senha = document.getElementById('senha');

button.addEventListener("click", function(){
    if(email.value == 0 ||senha.value ==0){
        alert('o campo e-mail ou senhas não foram preenchidos');
    }else{
        alert('campos preenchidos com sucesso');
    }
});