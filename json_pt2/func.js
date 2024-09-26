function carregarDados(){
    let divisao = document.querySelector("#divProduto")
        divisao.innerHTML+= "<ol>"
        fetch("prod.json").then((response) =>{
            response.json().then((prod) =>{
                           prod.prodA.map((produto) =>{
                            divisao.innerHTML+="<li> {"
                            +produto.cod+", "
                            + produto.nome+", "
                            +produto.preco+", "
                            +produto.desc+", "
                            +produto.cat+", "
                            +produto.ava+ "} </li>";
                            console.log(produto.cod);
                            console.log(produto.nome);
                            console.log(produto.preco);
                        })          
            })
        })
        divisao.innerHTML+= "</ol>"
}

window.addEventListener("load", function(){
    carregarDados()
})