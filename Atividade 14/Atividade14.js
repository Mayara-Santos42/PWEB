function validarDados(){
    tamanhoNome = document.forms['formulario']['nome'].value;
    tamanhoComentario = document.forms['formulario']['comentario'].value;
    
    if(tamanhoNome.length < 10)
    alert('Nome incorreto, favor colocar pelo menos 10 caracteres.');
    if(tamanhoComentario.length < 20)
    alert('Favor preencher o comentário com pelo menos 20 caraceteres');

    if(document.getElementById('sim').checked == true)
    alert('Volte Sempre!');
    else
    alert('Que bom que você voltou!');

}

function limpar(){
    document.getElementById('#').value('')
}