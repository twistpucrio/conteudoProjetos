function executar(n, t){
    const padrao = new RegExp('maria*','g');
    let resp;
    resp = padrao.exec(n);
    alert("Nome: "+resp);
    
    resp = padrao.exec(t);
    alert("Texto: "+resp)
}

function testar(n,t){
    const padrao = new RegExp('maria*', 'g');
    
    let resp = padrao.test(n);
    alert("Nome: "+resp);

    resp = padrao.test(t);
    alert("Texto: "+resp);
}

window.addEventListener("load", function(){
    let btnTestar = document.querySelector("#btnTeste");
    let btnExecutar = document.querySelector("#btnExec");

    // colocar o evento de clicar nos botões
    let nome, texto;

    btnExecutar.addEventListener("click", function(){
        nome = document.querySelector("#nome");
        texto = document.querySelector("#texto");
        executar(nome.value,texto.value);
    });

    btnTestar.addEventListener("click",function(){
        nome = document.querySelector("#nome");
        texto = document.querySelector("#texto");
        testar(nome.value,texto.value);
    });


});