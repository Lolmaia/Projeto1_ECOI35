function Enviar() {

    var nome = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var cmbquem = document.getElementById("cmbquem").value;
    var msg = document.getElementById("msg").value;



    if (nome != "" && mail!= "" && cmbquem != "" && msg != "") {
        alert('Obrigado sr(a) ' + nome + ' a sua sugestão foi enviada com sucesso!');
    }else{
        alert("Campo obrigatório não preenchido! Favor conferir!");
    }

}