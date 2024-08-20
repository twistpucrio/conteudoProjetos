function validarExtensao(arquivo,extensao){
    // arquivo é o elemento input:file inteiro
    //alert(arquivo.value);
    caminho = arquivo.value.split("\\");
    //alert(caminho);
    //pegar o ultimo elemento
    alert("Primeira forma: "+
        caminho[caminho.length-1])

    // outra maneira
    let resp = arquivo.files[0];
    alert("Segunda forma: "+
        resp.name);

     // comparar a extensão
     let indice = caminho.length-1;
     let comp = caminho[indice].split(".");
     let ext = comp[comp.length-1];

     if(extensao.lower === ext.lower){
        alert("Igual");
     }else{
        alert("Diferente");
     }
}

function validarSenha(senha){

}

function validarDatanasc(dtNasc){
    let exp = /\b(\d+\/+\d+\/+d)\b/g
}

function validarUsuario(usuario){

}

function validarNome(nome){

}

window.addEventListener("load", function(){
    let btnValidar = document.querySelector("#btnValidar");
    let nome, nasc, arq, usu, senha;

    btnValidar.addEventListener("click",function(){
        nome = document.querySelector("#nome").value;
        nasc = document.querySelector("#nasc").value;
        arq = document.querySelector("#arq");
        usu = document.querySelector("#usu").value;
        senha = document.querySelector("#senha");
        validarNome(nome);
        validarDatanasc(nasc);
        validarUsuario(usu);
        validarSenha(senha);
        validarExtensao(arq,"PPTX");
    });
});