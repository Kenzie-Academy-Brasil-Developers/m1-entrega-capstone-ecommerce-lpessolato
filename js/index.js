const listaDeProdutos = document.querySelector(".listaProdutos")

function listarProduto(){

    for(let i=0;i<data.length;i++){

        const divCard = document.createElement("div")
        divCard.className = "card"
        const imgProduto =  document.createElement("img")
        imgProduto.className = "imagemProduto"
        const botaoCategoria = document.createElement("button")
        botaoCategoria.className= "categoria"
        const titulo  = document.createElement("h3")
        titulo.className = "nomeProduto"
        const descricaoProduto = document.createElement("p")
        descricaoProduto.className = "descricao"
        const precoProduto  = document.createElement("strong")
        precoProduto.className = "preco"
        const adicionarCarrinho =  document.createElement("p")
        adicionarCarrinho.className = "adicionarCarrinho"

        imgProduto.src = `${data[i].img}`
        imgProduto.alt = `${data[i].nameItem}`

        botaoCategoria.innerText = `${data[i].tag[0]}`

        titulo.innerText = `${data[i].nameItem}`

        descricaoProduto.innerText = `${data[i].description}`

        precoProduto.innerText = `R$${data[i].value}`

        adicionarCarrinho.innerText = "Adicionar ao carrinho"

        listaDeProdutos.appendChild(divCard)
        divCard.appendChild(imgProduto)
        divCard.appendChild(botaoCategoria)
        divCard.appendChild(titulo)
        divCard.appendChild(descricaoProduto)
        divCard.appendChild(precoProduto)
        divCard.appendChild(adicionarCarrinho)
    }
}

listarProduto()




