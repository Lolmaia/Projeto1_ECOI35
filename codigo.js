function Enviar() {

    var nome = document.getElementById("name").value;/* Armazena na variável nome o dado digitado no campo name do HTML*/
    var mail = document.getElementById("mail").value;
    var cmbquem = document.getElementById("cmbquem").value;
    var msg = document.getElementById("msg").value;



    if (nome != "" && mail!= "" && cmbquem != "" && msg != "") {
        var obj = { 'nome': nome, 'e-mail': mail, 'id':cmbquem, 'sugestao':msg};
        localStorage.setItem('dadosform', JSON.stringify(obj));/* Permite salvar pares de chave e valores no navegador do cliente.*/
        alert('Obrigado sr(a) ' + nome + ' a sua sugestão foi enviada com sucesso!');
    }else{
        alert("Campo obrigatório não preenchido! Favor conferir!");
    }
     var retrievedObject = localStorage.getItem('dadosform');/* Permite recuperar o valor armazenado a partir de sua chave.*/
    console.log(retrievedObject);/* Teste de armazenamento*/
    

}
